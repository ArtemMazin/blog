"use client";

import { ArticleList } from "@/features/articles/ui/article-list";
import { UIMain } from "@/shared/ui/ui-main";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";

export default function RacesPage() {
  const {
    data: raceArticles,
    isLoading: isLoadingRaces,
    error: raceError,
  } = useAllArticles("races");

  return (
    <UIMain>
      <ArticleList
        articles={raceArticles}
        isLoading={isLoadingRaces}
        error={raceError}
        type="races"
      />
    </UIMain>
  );
}
