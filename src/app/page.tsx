import * as React from "react";
import { UIMain } from "@/shared/ui/ui-main";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { CharacterArticleSlider } from "@/features/articles/ui/slider/character-slider";
import { RaceArticleSlider } from "@/features/articles/ui/slider/race-slider";
import {
  characterArticleControllerGetTopCharacterArticles,
  raceArticleControllerGetTopRaceArticles,
} from "@/shared/api/generated";
import { getMetadata } from "./metadata";

export const metadata = getMetadata(
  "Главная - Star Wars Universe",
  "Добро пожаловать в мир Звездных войн. Узнайте о персонажах, расах и многом другом из вселенной Star Wars.",
  "/",
);

async function getTopArticles() {
  try {
    const [characterResponse, raceResponse] = await Promise.all([
      characterArticleControllerGetTopCharacterArticles(),
      raceArticleControllerGetTopRaceArticles(),
    ]);

    return {
      topCharacterArticles: characterResponse.data,
      topRaceArticles: raceResponse.data,
    };
  } catch (error) {
    return {
      topCharacterArticles: [],
      topRaceArticles: [],
    };
  }
}

export const revalidate = 300;

export default async function HomePage() {
  const { topCharacterArticles, topRaceArticles } = await getTopArticles();

  return (
    <UIMain>
      <Center>
        <Box>
          <Heading as="h1" mb={4}>
            Добро пожаловать в мир Звездных войн
          </Heading>
          <Text>
            Здесь вы найдете информацию о персонажах, расах и многом другом из
            вселенной Звездных войн.
          </Text>
        </Box>
      </Center>
      <CharacterArticleSlider articles={topCharacterArticles} />
      <RaceArticleSlider articles={topRaceArticles} />
    </UIMain>
  );
}
