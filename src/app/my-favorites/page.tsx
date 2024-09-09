"use client";

import * as React from "react";
import { ArticleList } from "@/features/articles/ui/article-list";
import { UIMain } from "@/shared/ui/ui-main";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";

export default function MyFavoritesPage() {
  const { data: profile } = useProfile();
  const {
    data: characterArticles,
    isLoading: isLoadingCharacters,
    error: characterError,
  } = useAllArticles("characters");
  const {
    data: raceArticles,
    isLoading: isLoadingRaces,
    error: raceError,
  } = useAllArticles("races");
  const favoriteCharacterArticles = characterArticles?.filter((article) =>
    profile?.favorite_articles.includes(article._id),
  );
  const favoriteRaceArticles = raceArticles?.filter((article) =>
    profile?.favorite_articles.includes(article._id),
  );

  return (
    <UIMain>
      <ArticleTabs>
        <ArticleList
          articles={favoriteCharacterArticles}
          isLoading={isLoadingCharacters}
          error={characterError}
          type="characters"
        />
        <ArticleList
          articles={favoriteRaceArticles}
          isLoading={isLoadingRaces}
          error={raceError}
          type="races"
        />
      </ArticleTabs>
    </UIMain>
  );
}
