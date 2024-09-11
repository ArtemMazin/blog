"use client";

import * as React from "react";
import { UIMain } from "@/shared/ui/ui-main";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";
import { CharacterArticleList } from "@/features/articles/ui/article-list/character-list";
import { RaceArticleList } from "@/features/articles/ui/article-list/race-article";

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
        <CharacterArticleList
          articles={favoriteCharacterArticles}
          isLoading={isLoadingCharacters}
          error={characterError}
        />
        <RaceArticleList
          articles={favoriteRaceArticles}
          isLoading={isLoadingRaces}
          error={raceError}
        />
      </ArticleTabs>
    </UIMain>
  );
}
