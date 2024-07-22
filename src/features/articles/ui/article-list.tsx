"use client";

import * as React from "react";
import { Box, Heading, Text, Flex, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ArticleDto } from "@/shared/api/generated";
import { ArrowRight, BookOpen } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export interface IArticleListProps {
  articles: ArticleDto[];
}

export function ArticleList({ articles }: IArticleListProps) {
  const { bgColor, textColor, primaryColor, secondaryColor, borderColor } =
    useColors();

  return (
    <VStack spacing={12} align="stretch">
      {articles?.length === 0 ? (
        <Box textAlign="center">
          <Heading color={primaryColor}>Не найдено ни одной статьи</Heading>
        </Box>
      ) : (
        articles?.map((article) => (
          <Box key={article._id} cursor={"default"}>
            <Flex
              direction={{ base: "column", md: "row" }}
              bg={bgColor}
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="xl"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.02)" }}
              position="relative"
            >
              <Box
                width={{ base: "100%", md: "40%" }}
                height={{ base: "200px", md: "auto" }}
                position="relative"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </Box>
              <VStack
                align="stretch"
                p={6}
                spacing={4}
                width={{ base: "100%", md: "60%" }}
                justifyContent="space-between"
              >
                <Box>
                  <Heading as="h3" size="lg" color={primaryColor} mb={2}>
                    {article.title}
                  </Heading>
                  <Text color={textColor} noOfLines={3}>
                    {article.content}
                  </Text>
                </Box>
                <HStack justify="space-between" color={secondaryColor}>
                  <Text fontSize="sm">Автор: {article.author?.name}</Text>
                  <HStack>
                    <BookOpen size={16} />
                    <Text fontSize="sm">{"article.readingTime"} мин</Text>
                  </HStack>
                </HStack>
                <Link href={`/${article._id}`}>
                  <Flex align="center" color={primaryColor}>
                    <Text fontWeight="bold" mr={2}>
                      Читать статью
                    </Text>
                    <ArrowRight size={20} />
                  </Flex>
                </Link>
              </VStack>
            </Flex>
          </Box>
        ))
      )}
    </VStack>
  );
}
