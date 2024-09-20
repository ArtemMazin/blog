import { VStack, Heading, Text } from "@chakra-ui/react";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";
import CardFooter from "./card-footer";

interface CardContentProps {
  article: ResponseCharacterArticleDto | ResponseRaceArticleDto;
  type: "characters" | "races";
  bgColor: string;
  height: string | number;
}

export default function CardContent({
  article,
  type,
  bgColor,
  height,
}: CardContentProps) {
  return (
    <VStack
      p={4}
      bg={bgColor}
      align="stretch"
      height={height}
      justifyContent="space-between"
    >
      <Heading size="sm" noOfLines={2}>
        {article.title}
      </Heading>
      <Text fontSize="sm" noOfLines={2}>
        {article.content}
      </Text>
      <CardFooter article={article} type={type} />
    </VStack>
  );
}
