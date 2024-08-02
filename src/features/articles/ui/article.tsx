"use client";

import { articlesControllerGetOneArticle } from "@/shared/api/generated";
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

  // Запрос на получение данных статьи
  const { data: article } = useQuery({
    queryKey: ["article", id],
    queryFn: () => articlesControllerGetOneArticle(id).then((res) => res.data),
  });

  // Хуки для добавления и удаления из избранного
  const { mutate: addToFavorites } = useAddFavorites();
  const { mutate: removeFromFavorites } = useRemoveFavorites();

  // Проверка, находится ли статья в избранном у пользователя
  const isFavorite = user?.favorite_articles.includes(article?._id || "");

  // Обработчик клика по кнопке избранного
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
      w={"100%"}
      h="100%"
      bg={bgColor}
      color={textColor}
      borderRadius={{ base: "none", md: "xl" }}
      overflow="hidden"
      boxShadow={{ base: "none", md: "lg" }}
      transition="all 0.3s"
    >
      {article && (
        <VStack spacing={0} align="stretch" h="100%">
          {/* Изображение статьи */}
          <Box position="relative" h={{ base: "30vh", md: "40vh", lg: "50vh" }}>
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + article.image}
              alt={article?.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </Box>
          {/* Контент статьи */}
          <VStack
            p={{ base: 4, md: 6, lg: 8 }}
            spacing={4}
            align="stretch"
            flex={1}
          >
            {/* Заголовок статьи */}
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color={textColor}
            >
              {article?.title}
            </Heading>
            {/* Информация об авторе и дате публикации */}
            <HStack justifyContent="space-between" flexWrap="wrap">
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
            </HStack>
            {/* Содержание статьи */}
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              lineHeight="tall"
              flex={1}
              overflowY="auto"
            >
              {article?.content}
            </Text>
            <Spacer />
            {/* Нижняя панель с кнопками */}
            <HStack justifyContent="space-between" alignItems="center">
              <HStack>
                {/* Кнопки редактирования и удаления для автора статьи */}
                {user && article.author._id === user._id && (
                  <>
                    <ModalDeletingArticle id={article._id} />
                    <ModalUpdatingArticle article={article} />
                  </>
                )}
              </HStack>
              <HStack>
                {/* Кнопка добавления/удаления из избранного */}
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
                    onClick={() => handleClick({ articleId: article._id })}
                    variant="ghost"
                    size="md"
                  />
                )}
                {/* Кнопка "Назад" */}
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
      )}
    </Box>
  );
}
