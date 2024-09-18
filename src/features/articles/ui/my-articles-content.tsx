"use client";

import * as React from "react";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";
import { CharacterArticleList } from "@/features/articles/ui/article-list/character-list";
import { RaceArticleList } from "@/features/articles/ui/article-list/race-list";
import { useMyArticles } from "@/features/articles/hooks/useMyArticles";

export function MyArticlesContent() {
  const {
    data: characterArticles,
    isLoading: isLoadingCharacters,
    error: characterError,
  } = useMyArticles("characters");

  const {
    data: raceArticles,
    isLoading: isLoadingRaces,
    error: raceError,
  } = useMyArticles("races");

  return (
    <ArticleTabs>
      <CharacterArticleList
        articles={characterArticles}
        isLoading={isLoadingCharacters}
        error={characterError}
      />
      <RaceArticleList
        articles={raceArticles}
        isLoading={isLoadingRaces}
        error={raceError}
      />
    </ArticleTabs>
  );
}
