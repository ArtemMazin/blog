import { ResponseCharacterArticleDto } from "@/shared/api/generated";
import { Box, SimpleGrid, Image, Flex } from "@chakra-ui/react";

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
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {allCharacters.map((character) => {
        const isActive = characters.includes(character._id);
        return (
          <Flex key={character._id} justifyContent="center" alignItems="center">
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
              boxSize={{ base: "100px", md: "120px", lg: "150px" }}
              opacity={isActive ? 1 : 0.5}
              transition="opacity 0.2s"
              _hover={{ opacity: 0.8 }}
            >
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + character.image}
                alt={character.characterName}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
}
