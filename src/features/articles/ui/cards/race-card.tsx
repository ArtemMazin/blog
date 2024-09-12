import { ResponseRaceArticleDto } from "@/shared/api/generated";
import { Text } from "@chakra-ui/react";
import { BaseArticleCard } from "./base-card";

interface RaceArticleCardProps {
  article: ResponseRaceArticleDto;
}

export function RaceArticleCard({ article }: RaceArticleCardProps) {
  return (
    <BaseArticleCard
      article={article}
      type="races"
      renderSpecificContent={() => <></>}
    />
  );
}
