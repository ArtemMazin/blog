"use client";

import { ArticleList } from "@/features/articles/ui/article-list";
import { UIMain } from "@/shared/ui/ui-main";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";

export default function CharactersPage() {
  const {
    data: characterArticles,
    isLoading: isLoadingCharacters,
    error: characterError,
  } = useAllArticles("characters");

  return (
    <UIMain>
      <ArticleList
        articles={characterArticles}
        isLoading={isLoadingCharacters}
        error={characterError}
        type="characters"
      />
    </UIMain>
  );
}
