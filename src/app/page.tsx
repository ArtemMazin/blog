"use client";

import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { Container } from "@chakra-ui/react";
import { articlesControllerGetAllArticles } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export default function HomPage() {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain>{articles && <ArticleList articles={articles} />}</UIMain>
    </Container>
  );
}
