import { ResponseRaceArticleDto } from "@/shared/api/generated";
import { RaceArticleCard } from "../cards/race-card";
import { BaseArticleList } from "./base-list";

interface RaceArticleListProps {
  articles: ResponseRaceArticleDto[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function RaceArticleList({
  articles,
  isLoading,
  error,
}: RaceArticleListProps) {
  return (
    <BaseArticleList
      isLoading={isLoading}
      error={error}
      articles={articles}
      renderArticle={(article) => <RaceArticleCard article={article} />}
    />
  );
}
