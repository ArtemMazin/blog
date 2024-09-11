import { Box } from "@chakra-ui/react";
import { ResponseRaceArticleDto } from "@/shared/api/generated";
import { RaceArticleCard } from "../cards/race-card";
import { BaseArticleSlider } from "./base-slider";

interface RaceArticleSliderProps {
  articles: ResponseRaceArticleDto[] | undefined;
}

export function RaceArticleSlider({ articles }: RaceArticleSliderProps) {
  return (
    <BaseArticleSlider title="Популярные расы">
      {articles?.map((article) => (
        <Box key={article._id} px={2}>
          <RaceArticleCard article={article} />
        </Box>
      ))}
    </BaseArticleSlider>
  );
}
