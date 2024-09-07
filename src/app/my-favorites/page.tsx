"use client";

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
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
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
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
    </Container>
  );
}
