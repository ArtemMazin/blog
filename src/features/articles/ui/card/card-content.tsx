import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";
import CardFooter from "./card-footer";
import SafeHTML from "@/shared/ui/safeHTML";

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
      <Box fontSize="sm" noOfLines={2}>
        <SafeHTML html={article.content} />
      </Box>
      <CardFooter article={article} type={type} />
    </VStack>
  );
}
