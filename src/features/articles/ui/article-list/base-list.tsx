"use client";

import * as React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

interface BaseArticleListProps {
  articles: any[];
  renderArticle: (article: any) => React.ReactNode;
}

export function BaseArticleList({
  articles,
  renderArticle,
}: BaseArticleListProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {articles.map((article) => (
        <Box key={article._id} px={2}>
          {renderArticle(article)}
        </Box>
      ))}
    </SimpleGrid>
  );
}
