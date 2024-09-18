"use client";

import * as React from "react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";
import { CharacterArticleList } from "@/features/articles/ui/article-list/character-list";
import { RaceArticleList } from "@/features/articles/ui/article-list/race-list";
import { Box, Spinner } from "@chakra-ui/react";

export function MyFavoritesContent() {
  const { data: profile, isLoading: isLoadingProfile } = useProfile();
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

  const favoriteCharacterArticles = React.useMemo(
    () =>
      characterArticles?.filter((article) =>
        profile?.favorite_articles.includes(article._id),
      ),
    [characterArticles, profile],
  );

  const favoriteRaceArticles = React.useMemo(
    () =>
      raceArticles?.filter((article) =>
        profile?.favorite_articles.includes(article._id),
      ),
    [raceArticles, profile],
  );

  const isLoading = isLoadingProfile || isLoadingCharacters || isLoadingRaces;

  if (isLoading) {
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  }

  return (
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
  );
}
