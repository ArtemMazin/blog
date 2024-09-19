import { UIMain } from "@/shared/ui/ui-main";
import { Box, Heading } from "@chakra-ui/react";
import CreateRaceArticleForm from "./create-race-article-form";

export default function CreateRaceArticlePage() {
  return (
    <UIMain>
      <Box borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6}>
          Создать статью о расе
        </Heading>
        <CreateRaceArticleForm />
      </Box>
    </UIMain>
  );
}
