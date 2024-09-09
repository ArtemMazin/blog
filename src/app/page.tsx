import Sidebar from "@/features/articles/ui/article-sidebar";
import { UIMain } from "@/shared/ui/ui-main";
import { Heading, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <UIMain>
      <Heading as="h1" mb={4}>
        Добро пожаловать в мир Звездных войн
      </Heading>
      <Text>
        Здесь вы найдете информацию о персонажах, расах и многом другом из
        вселенной Звездных войн.
      </Text>
      <Sidebar type="characters" />
      <Sidebar type="races" />
    </UIMain>
  );
}
