import { Box } from "@chakra-ui/react";
import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { BaseArticleSlider } from "./base-slider";
import { CharacterArticleCard } from "../cards/character-card";

interface CharacterArticleSliderProps {
  articles: ResponseCharacterArticleDto[] | undefined;
}

export function CharacterArticleSlider({
  articles,
}: CharacterArticleSliderProps) {
  return (
    <BaseArticleSlider title="Популярные персонажи">
      {articles?.map((article) => (
        <Box key={article._id} px={2}>
          <CharacterArticleCard article={article} />
        </Box>
      ))}
    </BaseArticleSlider>
  );
}
