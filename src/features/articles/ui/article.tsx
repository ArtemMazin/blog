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
import { ModalDeletingArticle } from "./modal-deleting-article";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useToggleFavorites } from "../hooks/useToggleFavorites";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useColors } from "@/shared/hooks/useColors";
import { Heart } from "lucide-react";
import { useLikeCharacterArticle } from "../hooks/useLikeCharacterArticle";
import { useLikeRaceArticle } from "../hooks/useLikeRaceArticle";
import { UIButton } from "@/shared/ui/ui-button";
import { useArticleByID } from "../hooks/useArticleByID";

type ArticleType = "characters" | "races";

export default function Article({
  id,
  type,
}: {
  id: string;
  type: ArticleType;
}) {
  const router = useRouter();
  const { data: user } = useProfile();
  const { bgColor, borderColor, textColor, dangerColor } = useColors();

  // Запрос на получение данных статьи
  const { data: article } = useArticleByID(type, id);

  // Хуки для добавления и удаления из избранного
  const { mutate: toFavorites } = useToggleFavorites();

  const { mutate: toggleCharacterLike } = useLikeCharacterArticle();
  const { mutate: toggleRaceLike } = useLikeRaceArticle();

  // Проверка, находится ли статья в избранном у пользователя
  const isFavorite = user?.favorite_articles.includes(article?._id || "");

  // Обработчик клика по кнопке избранного
  const handleClick: SubmitHandler<{ articleId: string }> = ({ articleId }) => {
    if (user) {
      toFavorites({ action: isFavorite ? "remove" : "add", articleId });
      if (type === "characters") {
        toggleCharacterLike({
          action: isFavorite ? "remove" : "add",
          articleId,
        });
      } else {
        toggleRaceLike({ action: isFavorite ? "remove" : "add", articleId });
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
              style={{ objectFit: "contain" }}
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
                    <ModalDeletingArticle id={article._id} type={type} />
                    <Link href={`edit-article/${article._id}`}>
                      <UIButton className="w-fit">Изменить статью</UIButton>
                    </Link>
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
