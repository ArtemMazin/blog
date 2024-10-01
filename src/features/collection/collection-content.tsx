"use client";

import * as React from "react";
import { Box, Container, HStack, Spinner, VStack } from "@chakra-ui/react";
import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { CharacterList } from "./character-list";
import { FilterButtons } from "./filter-buttons";
import { useCharacterData } from "./hooks/useCharacterData";
import { RollButton } from "./roll-button";

export type FilterType = "all" | "collected" | "missing";

interface CollectionContentProps {
  initialCharacters: ResponseCharacterArticleDto[];
}

export function CollectionContent({
  initialCharacters,
}: CollectionContentProps) {
  const [filter, setFilter] = React.useState<FilterType>("all");
  const {
    filteredCharacters,
    isLoading,
    error,
    handleRollCharacter,
    isRolling,
    remainingRolls,
    collectedCharacters,
  } = useCharacterData(filter, initialCharacters);

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        Ошибка: {error.message}
      </Box>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justifyContent="space-between" wrap="wrap">
          <FilterButtons filter={filter} setFilter={setFilter} />
          <RollButton
            handleRollCharacter={handleRollCharacter}
            isRolling={isRolling}
            remainingRolls={remainingRolls}
          />
        </HStack>
        <CharacterList
          characters={collectedCharacters}
          allCharacters={filteredCharacters}
        />
      </VStack>
    </Container>
  );
}
