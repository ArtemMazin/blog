"use client";

import { Flex, Text, Button, Link } from "@chakra-ui/react";
import { Clock, BookOpen, Lock, ChevronRight } from "lucide-react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";
import { useHandlePremium } from "../../hooks/useHandlePremium";

interface CardFooterProps {
  article: ResponseCharacterArticleDto | ResponseRaceArticleDto;
  type: "characters" | "races";
}

export default function CardFooter({ article, type }: CardFooterProps) {
  const { handleClick } = useHandlePremium();
  const { data: user } = useProfile();

  return (
    <Flex
      justify="space-between"
      align="center"
      flexDirection={{ base: "column", sm: "row" }}
      gap={{ base: 2, sm: 0 }}
    >
      <Flex align="center" flexWrap="wrap" gap={2}>
        <Flex align="center">
          <Clock size={14} />
          <Text fontSize="xs" ml={1}>
            {new Date(article.createdAt).toLocaleDateString()}
          </Text>
        </Flex>
        <Flex align="center">
          <BookOpen size={14} />
          <Text fontSize="xs" ml={1}>
            {article.readingTime} мин
          </Text>
        </Flex>
      </Flex>
      {article.isPremium && !user?.isPremium ? (
        <Button
          size="sm"
          leftIcon={<Lock size={16} />}
          onClick={() => handleClick(article)}
          colorScheme="yellow"
          variant="solid"
          width={{ base: "100%", sm: "auto" }}
        >
          Премиум
        </Button>
      ) : (
        <Link
          href={`/${type}/${article._id}`}
          width={{ base: "100%", sm: "auto" }}
        >
          <Button
            size="sm"
            rightIcon={<ChevronRight size={16} />}
            variant="solid"
            width="100%"
          >
            Читать
          </Button>
        </Link>
      )}
    </Flex>
  );
}
