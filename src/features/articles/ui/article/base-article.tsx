"use client";

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import Link from "next/link";
import { useColors } from "@/shared/hooks/useColors";
import { Heart } from "lucide-react";
import { UIButton } from "@/shared/ui/ui-button";
import { ResponseUserDto } from "@/shared/api/generated";
import { ModalDeletingArticle } from "../modal-deleting-article";

interface BaseArticleProps {
  id: string;
  type: "characters" | "races";
  title: string;
  content: string;
  image: string;
  author: ResponseUserDto;
  createdAt: string;
  isFavorite: boolean;
  onLikeClick: (articleId: string) => void;
  children?: React.ReactNode;
}

export function BaseArticle({
  id,
  type,
  title,
  content,
  image,
  author,
  createdAt,
  isFavorite,
  onLikeClick,
  children,
}: BaseArticleProps) {
  const router = useRouter();
  const { data: user } = useProfile();
  const { bgColor, borderColor, textColor, dangerColor } = useColors();

  return (
    <Box
      w={"100%"}
      h="100%"
      bg={bgColor}
      color={textColor}
      borderRadius={{ base: "none", md: "xl" }}
      overflow="hidden"
      boxShadow={{ base: "none", md: "lg" }}
      transition="all 0.3s"
    >
      <VStack spacing={0} align="stretch" h="100%">
        <Box position="relative" h={{ base: "30vh", md: "40vh", lg: "50vh" }}>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + image}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
          />
        </Box>
        <VStack
          p={{ base: 4, md: 6, lg: 8 }}
          spacing={4}
          align="stretch"
          flex={1}
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            color={textColor}
          >
            {title}
          </Heading>
          <HStack justifyContent="space-between" flexWrap="wrap">
            <Text fontSize="sm">
              Автор:{" "}
              <Link
                href={`/users/${author._id}`}
                style={{ fontWeight: "bold", textDecoration: "underline" }}
                className="text-blue-500 hover:text-blue-600"
              >
                {author.name}
              </Link>
            </Text>
            <Text fontSize="sm">
              Опубликовано: {new Date(createdAt).toLocaleDateString()}
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            lineHeight="tall"
            flex={1}
            overflowY="auto"
          >
            {content}
          </Text>
          {children}
          <Spacer />
          <HStack justifyContent="space-between" alignItems="center">
            <HStack>
              {user && author._id === user._id && (
                <>
                  <ModalDeletingArticle id={id} type={type} />
                  <Link href={`edit-article/${id}`}>
                    <UIButton className="w-fit">Изменить статью</UIButton>
                  </Link>
                </>
              )}
            </HStack>
            <HStack>
              {user && (
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
                  onClick={() => onLikeClick(id)}
                  variant="ghost"
                  size="md"
                />
              )}
              <Button
                variant="outline"
                onClick={() => router.back()}
                borderColor={borderColor}
              >
                Назад
              </Button>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
