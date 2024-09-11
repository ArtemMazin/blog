"use client";

import * as React from "react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { BaseArticle } from "./base-article";
import {
  Text,
  VStack,
  Box,
  Heading,
  Badge,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { useArticleByID } from "../../hooks/useArticleByID";
import { useLikeRaceArticle } from "../../hooks/useLikeRaceArticle";
import { useToggleFavorites } from "../../hooks/useToggleFavorites";
import { useColors } from "@/shared/hooks/useColors";

export default function RaceArticle({ id }: { id: string }) {
  const { data: user } = useProfile();
  const { data: article } = useArticleByID("races", id);
  const { mutate: toFavorites } = useToggleFavorites();
  const { mutate: toggleRaceLike } = useLikeRaceArticle();
  const { bgColor, textColor, primaryColor } = useColors();

  const isFavorite =
    user?.favorite_articles.includes(article?._id || "") || false;

  const handleClick = (articleId: string) => {
    if (user) {
      toFavorites({ action: isFavorite ? "remove" : "add", articleId });
      toggleRaceLike({ action: isFavorite ? "remove" : "add", articleId });
    }
  };

  if (!article) return null;

  return (
    <BaseArticle
      id={article._id}
      type="races"
      title={article.title}
      image={article.image}
      author={article.author}
      createdAt={article.createdAt}
      isFavorite={isFavorite}
      onLikeClick={handleClick}
      content={""}
    >
      <Flex>
        <Box flex="1" pr={6}>
          <Text>{article.content}</Text>
        </Box>
        <Box
          width="300px"
          h={"max-content"}
          bg={bgColor}
          p={6}
          boxShadow="md"
          color={textColor}
          ml={6}
        >
          <Heading as="h3" size="md" mb={4} color={primaryColor}>
            Информация о расе
          </Heading>
          <VStack align="start" spacing={3}>
            <RaceInfo label="Название расы" value={article.raceName} />
            <RaceInfo label="Тип" value={article.type} />
            <RaceInfo label="Класс" value={article.class} />
            <RaceInfo label="Планета происхождения" value={article.homeWorld} />
            <RaceInfo label="Язык" value={article.language} />
            <RaceInfo label="Цвет кожи" value={article.skinColor} />
            <Text fontSize="sm">
              <Badge colorScheme="blue" mr={2} fontSize="xs">
                Отличительные признаки
              </Badge>
            </Text>
            <Wrap spacing={2}>
              {article.distinctiveFeatures.map((feature, index) => (
                <WrapItem key={index}>
                  <Badge colorScheme="green" fontSize="xs">
                    {feature}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
            <Text fontSize="sm">
              <Badge colorScheme="blue" mr={2} fontSize="xs">
                Известные представители
              </Badge>
            </Text>
            <Wrap spacing={2}>
              {article.knownRepresentatives.map((representative, index) => (
                <WrapItem key={index}>
                  <Badge colorScheme="purple" fontSize="xs">
                    {representative}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </Box>
      </Flex>
    </BaseArticle>
  );
}

function RaceInfo({ label, value }: { label: string; value: string }) {
  return (
    <Text fontSize="sm">
      <Badge colorScheme="blue" mr={2} fontSize="xs">
        {label}
      </Badge>
      {value}
    </Text>
  );
}