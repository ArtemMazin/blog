"use client";

import * as React from "react";
import { UIMain } from "@/shared/ui/ui-main";
import { useMyArticles } from "@/features/articles/hooks/useMyArticles";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";
import { CharacterArticleList } from "@/features/articles/ui/article-list/character-list";
import { RaceArticleList } from "@/features/articles/ui/article-list/race-article";

export default function MyArticlesPage() {
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
    <UIMain>
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
    </UIMain>
  );
}
