"use client";

import { UIMain } from "@/shared/ui/ui-main";
import { CharacterArticleList } from "@/features/articles/ui/article-list/character-list";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";

export default function CharactersPage() {
  const {
    data: characterArticles,
    isLoading: isLoadingCharacters,
    error: characterError,
  } = useAllArticles("characters");

  return (
    <UIMain>
      <CharacterArticleList
        articles={characterArticles}
        isLoading={isLoadingCharacters}
        error={characterError}
      />
    </UIMain>
  );
}
