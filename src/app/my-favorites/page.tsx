"use client";

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";

export default function MyFavoritesPage() {
  const { data: profile } = useProfile();
  const allArticles = useAllArticles();
  const favoriteArticles = allArticles?.filter((article) =>
    profile?.favorite_articles.includes(article._id),
  );

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain>
        {favoriteArticles && <ArticleList articles={favoriteArticles} />}
      </UIMain>
    </Container>
  );
}
