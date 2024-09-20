import { Box } from "@chakra-ui/react";
import { ResponseRaceArticleDto } from "@/shared/api/generated";
import { BaseArticleSlider } from "./base-slider";
import { BaseArticleCard } from "../card/base-card";

interface RaceArticleSliderProps {
  articles: ResponseRaceArticleDto[] | undefined;
}

export function RaceArticleSlider({ articles }: RaceArticleSliderProps) {
  return (
    <BaseArticleSlider title="Популярные расы">
      {articles?.map((article) => (
        <Box key={article._id} px={2}>
          <BaseArticleCard article={article} type="races" />
        </Box>
      ))}
    </BaseArticleSlider>
  );
}
