"use client";

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { useMyArticles } from "@/features/articles/hooks/useMyArticles";
import { ArticleTabs } from "@/features/articles/ui/article-tabs";

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
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain>
        {
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
        }
      </UIMain>
    </Container>
  );
}
