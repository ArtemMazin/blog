"use client";

import * as React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  VStack,
  HStack,
  Flex,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";
import { ArrowRight, BookOpen, Star, Lock } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { useProfile } from "@/features/profile/hooks/useProfile";
import Link from "next/link";
import { useHandleClick } from "../hooks/useHandleClick";
import { ArticleType } from "@/shared/api/generated";

interface ArticleListProps {
  articles: ArticleType[] | undefined;
  isLoading: boolean;
  error: Error | null;
  type: "characters" | "races";
}

export function ArticleList({
  articles,
  isLoading,
  error,
  type,
}: ArticleListProps) {
  const { bgColor, textColor, primaryColor, secondaryColor } = useColors();
  const { data: user } = useProfile();
  const { handleClick } = useHandleClick();

  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} height="300px" borderRadius="xl" />
        ))}
      </SimpleGrid>
    );
  }

  if (error) return <Box>Ошибка: {error.message}</Box>;
  if (!articles) return <Box>Статьи не найдены</Box>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {articles.length === 0 ? (
        <Box textAlign="center" gridColumn="1 / -1">
          <Heading>Не найдено ни одной статьи</Heading>
        </Box>
      ) : (
        articles.map((article) => (
          <Flex
            key={article._id}
            direction="column"
            bg={bgColor}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            position="relative"
            height="100%"
          >
            {/* Бейдж для премиум-статей */}
            {article.isPremium && (
              <Badge
                position="absolute"
                top={2}
                right={2}
                colorScheme="yellow"
                display="flex"
                alignItems="center"
                zIndex={1}
              >
                <Star size={14} style={{ marginRight: "4px" }} />
                Премиум
              </Badge>
            )}

            {/* Изображение статьи */}
            <Box height={200} position="relative">
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + article.image}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Содержимое карточки */}
            <Flex direction="column" p={4} flex={1}>
              <VStack align="stretch" spacing={3} flex={1}>
                <Heading as="h3" size="md" color={primaryColor} noOfLines={2}>
                  {article.title}
                </Heading>
                <Text color={textColor} noOfLines={3} fontSize="sm">
                  {article.content}
                </Text>
              </VStack>

              {/* Нижняя часть карточки */}
              <VStack align="stretch" spacing={2} mt="auto">
                <HStack justify="space-between" color={secondaryColor}>
                  <Text fontSize="xs">Автор: {article.author?.name}</Text>
                  <HStack>
                    <BookOpen size={14} />
                    <Text fontSize="xs">{article.readingTime} мин.</Text>
                  </HStack>
                </HStack>
                {article.isPremium && !user?.isPremium ? (
                  <Button
                    leftIcon={<Lock size={16} />}
                    colorScheme="yellow"
                    size="sm"
                    onClick={() => handleClick(article)}
                  >
                    Премиум статья
                  </Button>
                ) : (
                  <Link href={`/${type}/${article._id}`}>
                    <HStack color={primaryColor} justify="flex-end">
                      <Text fontWeight="bold" fontSize="sm">
                        Читать
                      </Text>
                      <ArrowRight size={16} />
                    </HStack>
                  </Link>
                )}
              </VStack>
            </Flex>
          </Flex>
        ))
      )}
    </SimpleGrid>
  );
}
