import { Box } from "@chakra-ui/react";
import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { BaseArticleSlider } from "./base-slider";
import { BaseArticleCard } from "../card/base-card";

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
          <BaseArticleCard article={article} type="characters" />
        </Box>
      ))}
    </BaseArticleSlider>
  );
}
