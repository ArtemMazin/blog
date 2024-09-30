"use client";

import * as React from "react";
import { Box, Button, Spinner, Text, VStack } from "@chakra-ui/react";
import { CharacterList } from "./character-list";
import { useCollection } from "./hooks/useCollection";
import { useRollCharacter } from "./hooks/useRollCharacter";
import { useAllArticles } from "../articles/hooks/useAllArticles";

export function CollectionContent() {
  const {
    data: characterArticles,
    isLoading: isLoadingCharacters,
    error: characterError,
  } = useAllArticles("characters");
  const {
    data: collection,
    isLoading: isLoadingCollection,
    error: collectionError,
  } = useCollection();
  const { mutate: rollCharacter, isPending: isRolling } = useRollCharacter();

  if (isLoadingCharacters || isLoadingCollection) {
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  }

  if (characterError || collectionError) {
    return (
      <Box textAlign="center">
        Ошибка: {(characterError || collectionError)?.message}
      </Box>
    );
  }

  return (
    <VStack spacing={4} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        Моя коллекция
      </Text>
      <Button
        onClick={() => rollCharacter()}
        isLoading={isRolling}
        loadingText="Бросаем кубик..."
      >
        Бросить кубик
      </Button>
      <CharacterList
        characters={collection?.characters || []}
        allCharacters={characterArticles || []}
      />
    </VStack>
  );
}
