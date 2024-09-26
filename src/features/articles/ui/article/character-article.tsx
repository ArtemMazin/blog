"use client";

import * as React from "react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { BaseArticle } from "./base-article";
import { Text, VStack, Box, Heading, Badge, Link } from "@chakra-ui/react";
import { useArticleByID } from "../../hooks/useArticleByID";
import { useLikeCharacterArticle } from "../../hooks/useLikeCharacterArticle";
import { useToggleFavorites } from "../../hooks/useToggleFavorites";
import { useColors } from "@/shared/hooks/useColors";
import SafeHTML from "@/shared/ui/safeHTML";

export default function CharacterArticle({ id }: { id: string }) {
  const { data: user } = useProfile();
  const { data: article } = useArticleByID("characters", id);
  const { mutate: toFavorites } = useToggleFavorites();
  const { mutate: toggleCharacterLike } = useLikeCharacterArticle();
  const { bgColor, textColor, primaryColor, linkColor } = useColors();

  const isFavorite =
    user?.favorite_articles.includes(article?._id || "") || false;

  const handleClick = (articleId: string) => {
    if (user) {
      toFavorites({ action: isFavorite ? "remove" : "add", articleId });
      toggleCharacterLike({
        action: isFavorite ? "remove" : "add",
        articleId,
      });
    }
  };

  if (!article) return null;

  return (
    <BaseArticle
      id={article._id}
      type="characters"
      title={article.title}
      image={article.image}
      author={article.author}
      createdAt={article.createdAt}
      isFavorite={isFavorite}
      onLikeClick={handleClick}
    >
      <Box position="relative">
        <Box
          width="300px"
          h="max-content"
          bg={bgColor}
          p={6}
          boxShadow="md"
          color={textColor}
          float="right"
          ml={6}
          mb={6}
        >
          <Heading as="h3" size="md" mb={4} color={primaryColor}>
            Информация о персонаже
          </Heading>
          <VStack align="start" spacing={3}>
            <CharacterInfo
              label="Имя персонажа"
              value={article.characterName}
            />
            {article.race && (
              <Link href={`/races/${article.race._id}`} color={linkColor}>
                <CharacterInfo
                  label="Раса"
                  value={article.race.raceName || ""}
                />
              </Link>
            )}
            <CharacterInfo label="Пол" value={article.gender} />
            <CharacterInfo label="Родной мир" value={article.homeWorld} />
            {article.birthDate && (
              <CharacterInfo label="Дата рождения" value={article.birthDate} />
            )}
            {article.deathDate && (
              <CharacterInfo label="Дата смерти" value={article.deathDate} />
            )}
            {article.height && (
              <CharacterInfo label="Рост" value={article.height} />
            )}
          </VStack>
        </Box>
        <SafeHTML html={article.content} />
      </Box>
    </BaseArticle>
  );
}

function CharacterInfo({ label, value }: { label: string; value: string }) {
  return (
    <Text fontSize="sm">
      <Badge colorScheme="blue" mr={2} fontSize="xs">
        {label}
      </Badge>
      {value}
    </Text>
  );
}
