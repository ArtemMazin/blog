"use client";

import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { BaseArticleList } from "./base-list";
import { Box, Spinner } from "@chakra-ui/react";
import { BaseArticleCard } from "../card/base-card";

interface CharacterArticleListProps {
  articles: ResponseCharacterArticleDto[] | undefined;
  isLoading?: boolean;
  error?: Error | null;
}

export function CharacterArticleList({
  articles,
  isLoading,
  error,
}: CharacterArticleListProps) {
  if (isLoading) {
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return <Box textAlign="center">Ошибка: {error.message}</Box>;
  }

  if (!articles || articles.length === 0) {
    return <Box textAlign="center">Статьи не найдены</Box>;
  }

  return (
    <BaseArticleList
      articles={articles}
      renderArticle={(article) => (
        <BaseArticleCard article={article} type="characters" />
      )}
    />
  );
}
