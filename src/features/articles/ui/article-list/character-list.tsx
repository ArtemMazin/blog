import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { BaseArticleList } from "./base-list";
import { CharacterArticleCard } from "../cards/character-card";

interface CharacterArticleListProps {
  articles: ResponseCharacterArticleDto[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function CharacterArticleList({
  articles,
  isLoading,
  error,
}: CharacterArticleListProps) {
  return (
    <BaseArticleList
      isLoading={isLoading}
      error={error}
      articles={articles}
      renderArticle={(article) => <CharacterArticleCard article={article} />}
    />
  );
}
