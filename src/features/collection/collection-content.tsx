"use client";

import * as React from "react";
import {
  Box,
  Button,
  Spinner,
  VStack,
  Container,
  useToast,
  HStack,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { CharacterList } from "./character-list";
import { useCollection } from "./hooks/useCollection";
import { useRollCharacter } from "./hooks/useRollCharacter";
import { useAllArticles } from "../articles/hooks/useAllArticles";
import { Dices, User, Users, UserPlus } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

type FilterType = "all" | "collected" | "missing";

export function CollectionContent() {
  const toast = useToast();
  const colors = useColors();
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

  const [remainingRolls, setRemainingRolls] = React.useState<number | null>(
    null,
  );
  const [filter, setFilter] = React.useState<FilterType>("all");

  const handleRollCharacter = () => {
    rollCharacter(undefined, {
      onSuccess: (data) => {
        setRemainingRolls(data.remainingRolls);
        toast({
          title: data.isNew ? "Новый персонаж!" : "Персонаж уже в коллекции",
          description: `Осталось бросков: ${data.remainingRolls}`,
          status: data.isNew ? "success" : "info",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: (error) => {
        toast({
          title: "Ошибка",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };

  if (isLoadingCharacters || isLoadingCollection) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" color={colors.primaryColor} />
      </Box>
    );
  }

  if (characterError || collectionError) {
    return (
      <Box textAlign="center" py={10} color={colors.dangerColor}>
        Ошибка: {(characterError || collectionError)?.message}
      </Box>
    );
  }

  const collectedCharacters = collection?.characters || [];
  const allCharacters = characterArticles || [];
  const missingCharacters = allCharacters.filter(
    (char) => !collectedCharacters.includes(char._id),
  );

  const filteredCharacters =
    filter === "collected"
      ? allCharacters.filter((char) => collectedCharacters.includes(char._id))
      : filter === "missing"
        ? missingCharacters
        : allCharacters;

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justifyContent="space-between" wrap="wrap">
          <ButtonGroup isAttached variant="outline">
            <Button
              onClick={() => setFilter("all")}
              bg={filter === "all" ? colors.primaryColor : "transparent"}
              leftIcon={<Users size={18} />}
              _hover={{ bg: colors.primaryColor }}
            >
              Все
            </Button>
            <Button
              onClick={() => setFilter("collected")}
              bg={filter === "collected" ? colors.primaryColor : "transparent"}
              leftIcon={<User size={18} />}
              _hover={{ bg: colors.primaryColor }}
            >
              Полученные
            </Button>
            <Button
              onClick={() => setFilter("missing")}
              bg={filter === "missing" ? colors.primaryColor : "transparent"}
              leftIcon={<UserPlus size={18} />}
              _hover={{ bg: colors.primaryColor }}
            >
              Отсутствующие
            </Button>
          </ButtonGroup>
          <IconButton
            aria-label="Бросить кубик"
            icon={<Dices size={24} />}
            onClick={handleRollCharacter}
            isLoading={isRolling}
            size="md"
            isDisabled={remainingRolls === 0}
            _hover={{ bg: colors.secondaryColor }}
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
