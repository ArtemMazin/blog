import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { Text } from "@chakra-ui/react";
import { BaseArticleCard } from "./base-card";

interface CharacterArticleCardProps {
  article: ResponseCharacterArticleDto;
}

export function CharacterArticleCard({ article }: CharacterArticleCardProps) {
  return (
    <BaseArticleCard
      article={article}
      type="characters"
      renderSpecificContent={() => <></>}
    />
  );
}
