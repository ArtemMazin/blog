"use client";

import { ArticleList } from "@/features/articles/ui/article-list";
import { UIMain } from "@/shared/ui/ui-main";
import { useSearch } from "@/features/articles/hooks/useSearch";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";
import { Heading, Box } from "@chakra-ui/react";

export function FindedList() {
  const {
    data: characterArticles,
    isLoading: isLoadingCharacters,
    error: characterError,
  } = useSearch("characters");

  const {
    data: raceArticles,
    isLoading: isLoadingRaces,
    error: raceError,
  } = useSearch("races");

  const count =
    characterArticles &&
    raceArticles &&
    [...characterArticles, ...raceArticles].length;

  return (
    <UIMain>
      <Box width="100%" textAlign="center" mb={6}>
        <Heading size="xl">Найдено статей: {count}</Heading>
      </Box>
      <ArticleTabs>
        <ArticleList
          articles={characterArticles}
          isLoading={isLoadingCharacters}
          error={characterError}
          type="characters"
        />
        <ArticleList
          articles={raceArticles}
          isLoading={isLoadingRaces}
          error={raceError}
          type="races"
        />
      </ArticleTabs>
    </UIMain>
  );
}
