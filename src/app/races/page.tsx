"use client";

import { UIMain } from "@/shared/ui/ui-main";
import { RaceArticleList } from "@/features/articles/ui/article-list/race-list";
import { useAllArticles } from "@/features/articles/hooks/useAllArticles";

export default function RacesPage() {
  const {
    data: raceArticles,
    isLoading: isLoadingRaces,
    error: raceError,
  } = useAllArticles("races");

  return (
    <UIMain>
      <RaceArticleList
        articles={raceArticles}
        isLoading={isLoadingRaces}
        error={raceError}
      />
    </UIMain>
  );
}
