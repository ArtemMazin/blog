"use client";

import { articlesControllerGetOneArticle } from "@/shared/api/generated";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { ModalUpdatingArticle } from "./modal-updating-article";
import { ModalDeletingArticle } from "./modal-deleting-article";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useAddFavorites } from "../hooks/useAddFavorites";
import { SubmitHandler } from "react-hook-form";
import { useRemoveFavorites } from "../hooks/useRemoveFavorites";
import Link from "next/link";
import { useColors } from "@/shared/hooks/useColors";
import { Heart } from "lucide-react";

export default function Article({ id }: { id: string }) {
  const router = useRouter();
  const { data: user } = useProfile();
  const { bgColor, borderColor, textColor, dangerColor } = useColors();

  const { data: article } = useQuery({
    queryKey: ["article", id],
    queryFn: () => articlesControllerGetOneArticle(id).then((res) => res.data),
  });

  const { mutate: addToFavorites } = useAddFavorites();
  const { mutate: removeFromFavorites } = useRemoveFavorites();

  const isFavorite = user?.favorite_articles.includes(article?._id || "");

  const handleClick: SubmitHandler<{ articleId: string }> = ({ articleId }) => {
    if (user) {
      if (isFavorite) {
        removeFromFavorites(articleId);
      } else {
        addToFavorites(articleId);
      }
    } else {
      router.push("/");
    }
  };

  return (
    <Box
      bg={bgColor}
      color={textColor}
      borderRadius={{ base: "none", md: "xl" }}
      overflow="hidden"
      boxShadow={{ base: "none", md: "lg" }}
      transition="all 0.3s"
    >
      {article && (
        <VStack spacing={0} align="stretch">
          <Box position="relative" h={{ base: "30vh", md: "40vh", lg: "50vh" }}>
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + article.image}
              alt={article?.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </Box>
          <Box p={{ base: 4, md: 6, lg: 8 }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb={4}
              color={textColor}
            >
              {article?.title}
            </Heading>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mb={6}
              flexDirection={{ base: "column", sm: "row" }}
              gap={2}
            >
              <Text fontSize="sm">
                Автор:{" "}
                <Link
                  href={`/users/${article?.author._id}`}
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {article?.author.name}
                </Link>
              </Text>
              <Text fontSize="sm">
                Опубликовано: {new Date(article.createdAt).toLocaleDateString()}
              </Text>
            </Flex>
            <Text mb={8} fontSize={{ base: "md", lg: "lg" }} lineHeight="tall">
              {article?.content}
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
              gap={4}
            >
              <Flex gap={2} alignItems="center">
                {user && article.author._id === user._id && (
                  <>
                    <ModalDeletingArticle id={article._id} />
                    <ModalUpdatingArticle article={article} />
                  </>
                )}
              </Flex>
              <Flex gap={2} alignItems="center">
                <IconButton
                  aria-label={
                    isFavorite
                      ? "Удалить из избранного"
                      : "Добавить в избранное"
                  }
                  icon={
                    <Heart
                      fill={isFavorite ? dangerColor : "none"}
                      color={isFavorite ? dangerColor : "currentColor"}
                    />
                  }
                  onClick={() => handleClick({ articleId: article._id })}
                  variant="ghost"
                  size="md"
                />
                <Button
                  variant="outline"
                  onClick={() => router.back()}
                  borderColor={borderColor}
                >
                  Назад
                </Button>
              </Flex>
            </Flex>
          </Box>
        </VStack>
      )}
    </Box>
  );
}
