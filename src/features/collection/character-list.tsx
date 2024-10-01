import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { Box, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CharacterListProps {
  characters: string[];
  allCharacters: ResponseCharacterArticleDto[];
}

export function CharacterList({
  characters,
  allCharacters,
}: CharacterListProps) {
  if (allCharacters.length === 0) {
    return <Box textAlign="center">Нет доступных персонажей</Box>;
  }

  return (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={4}>
      {allCharacters.map((character) => {
        const isActive = characters.includes(character._id);
        return (
          <Flex key={character._id} direction="column" alignItems="center">
            <Box
              position="relative"
              borderRadius="full"
              borderWidth="4px"
              borderColor={
                isActive
                  ? character.isPremium
                    ? "gold"
                    : "blue.500"
                  : "gray.300"
              }
              overflow="hidden"
              boxSize={{ base: "80px", sm: "100px", md: "120px", lg: "150px" }}
              opacity={isActive ? 1 : 0.5}
              transition="all 0.2s"
              _hover={{ opacity: 0.8, transform: "scale(1.05)" }}
            >
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + character.image}
                alt={character.characterName}
                objectFit="cover"
                fill
              />
            </Box>
            <Text
              mt={2}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign="center"
              fontWeight={isActive ? "bold" : "normal"}
            >
              {character.characterName}
            </Text>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
}
