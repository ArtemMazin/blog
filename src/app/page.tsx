"use client";

import * as React from "react";
import { useTopArticles } from "@/features/articles/hooks/useTopArticles";
import ArticleSlider from "@/features/articles/ui/article-slider";
import { UIMain } from "@/shared/ui/ui-main";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useColors } from "@/shared/hooks/useColors";

export default function HomePage() {
  const { data: topCharacterArticles, isLoading: isLoadingCharacters } =
    useTopArticles("characters");
  const { data: topRaceArticles, isLoading: isLoadingRaces } =
    useTopArticles("races");

  const isLoading = isLoadingCharacters || isLoadingRaces;

  const { borderColor, textColor } = useColors();

  if (isLoading) {
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
        <Box className="w-full my-4" borderColor={borderColor} p={8}>
          <Heading size="md" mb={4} color={textColor}>
            Популярные персонажи
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} height="350px" />
            ))}
          </SimpleGrid>
        </Box>
        <Box className="w-full my-4" borderColor={borderColor} p={8}>
          <Heading size="md" mb={4} color={textColor}>
            Популярные расы
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} height="350px" />
            ))}
          </SimpleGrid>
        </Box>
      </UIMain>
    );
  }

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

      {topCharacterArticles && topCharacterArticles.length > 0 && (
        <ArticleSlider articles={topCharacterArticles} type="characters" />
      )}
      {topRaceArticles && topRaceArticles.length > 0 && (
        <ArticleSlider articles={topRaceArticles} type="races" />
      )}
    </UIMain>
  );
}
