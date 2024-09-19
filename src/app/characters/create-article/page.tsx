import { UIMain } from "@/shared/ui/ui-main";
import { Box, Heading } from "@chakra-ui/react";
import CreateCharacterArticleForm from "./create-character-article-form";

export default function CreateCharacterArticlePage() {
  return (
    <UIMain>
      <Box borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6}>
          Создать статью о персонаже
        </Heading>
        <CreateCharacterArticleForm />
      </Box>
    </UIMain>
  );
}
