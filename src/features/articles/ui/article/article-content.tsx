import { VStack, Heading, Text, Flex, Spacer, Link } from "@chakra-ui/react";
import { ResponseUserDto } from "@/shared/api/generated";
import { useColors } from "@/shared/hooks/useColors";

interface ArticleContentProps {
  title: string;
  author: ResponseUserDto;
  createdAt: string;
  children?: React.ReactNode;
}

export default function ArticleContent({
  title,
  author,
  createdAt,
  children,
}: ArticleContentProps) {
  const { textColor, linkColor } = useColors();

  return (
    <VStack p={{ base: 4, md: 6, lg: 8 }} spacing={4} align="stretch" flex={1}>
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        color={textColor}
      >
        {title}
      </Heading>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", sm: "center" }}
        gap={2}
      >
        <Text fontSize="sm">
          Автор:{" "}
          <Link href={`/users/${author._id}`} color={linkColor}>
            {author.name}
          </Link>
        </Text>
        <Text fontSize="sm">
          Опубликовано: {new Date(createdAt).toLocaleDateString()}
        </Text>
      </Flex>
      {children}
      <Spacer />
    </VStack>
  );
}
