"use client";

import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { Container } from "@chakra-ui/react";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";

export default function HomPage() {
  const articles = useAllArticles();

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain>{articles && <ArticleList articles={articles} />}</UIMain>
    </Container>
  );
}
