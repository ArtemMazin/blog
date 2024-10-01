import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useCollection } from "./useCollection";
import { useRollCharacter } from "./useRollCharacter";
import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { FilterType } from "../collection-content";

export function useCharacterData(
  filter: FilterType,
  initialCharacters: ResponseCharacterArticleDto[],
) {
  const toast = useToast();
  const [remainingRolls, setRemainingRolls] = useState<number | null>(null);

  const {
    data: collection,
    isLoading: isLoadingCollection,
    error: collectionError,
  } = useCollection();
  const { mutate: rollCharacter, isPending: isRolling } = useRollCharacter();

  const isLoading = isLoadingCollection;
  const error = collectionError;

  const collectedCharacters = collection?.characters || [];
  const missingCharacters = initialCharacters.filter(
    (char) => !collectedCharacters.includes(char._id),
  );

  const filteredCharacters =
    filter === "collected"
      ? initialCharacters.filter((char) =>
          collectedCharacters.includes(char._id),
        )
      : filter === "missing"
        ? missingCharacters
        : initialCharacters;

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

  return {
    filteredCharacters,
    isLoading,
    error,
    handleRollCharacter,
    isRolling,
    remainingRolls,
    collectedCharacters,
  };
}
