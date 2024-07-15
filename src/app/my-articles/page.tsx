"use client";

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { useMyArticles } from "@/features/articles/hooks/useMyArticles";

export default function MyArticlesPage() {
  const articles = useMyArticles();

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain>{articles && <ArticleList articles={articles} />}</UIMain>
    </Container>
  );
}
