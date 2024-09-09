"use client";

import * as React from "react";
import { Box, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { ArticleType } from "@/shared/api/generated";
import { ArticleCard } from "./article-card";

interface ArticleListProps {
  articles: ArticleType[] | undefined;
  isLoading: boolean;
  error: Error | null;
  type: "characters" | "races";
}

export function ArticleList({
  articles,
  isLoading,
  error,
  type,
}: ArticleListProps) {
  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} height="300px" borderRadius="xl" />
        ))}
      </SimpleGrid>
    );
  }

  if (error) return <Box>Ошибка: {error.message}</Box>;
  if (!articles) return <Box>Статьи не найдены</Box>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {articles.length === 0 ? (
        <Box textAlign="center" gridColumn="1 / -1">
          <Heading>Не найдено ни одной статьи</Heading>
        </Box>
      ) : (
        articles.map((article) => (
          <Box key={article._id} px={2}>
            <ArticleCard article={article} type={type} />
          </Box>
        ))
      )}
    </SimpleGrid>
  );
}
