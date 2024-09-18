"use client";

import { Star, Clock, ChevronRight, Lock, BookOpen } from "lucide-react";
import {
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";
import { useColors } from "@/shared/hooks/useColors";
import { useHandlePremium } from "../hooks/useHandlePremium";
import { useProfile } from "@/features/profile/hooks/useProfile";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

interface BaseArticleCardProps {
  article: ResponseCharacterArticleDto | ResponseRaceArticleDto;
  type: "characters" | "races";
}

export function BaseArticleCard({ article, type }: BaseArticleCardProps) {
  const { bgColor, textColor } = useColors();
  const { handleClick } = useHandlePremium();
  const { data: user } = useProfile();

  return (
    <Box
      overflow="hidden"
      boxShadow="lg"
      position="relative"
      height="350px"
      color={textColor}
    >
      {article.isPremium && (
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme="yellow"
          display="flex"
          alignItems="center"
          zIndex={1}
          px={2}
          py={1}
        >
          <Star size={14} style={{ marginRight: "4px" }} />
          Премиум
        </Badge>
      )}
      <Box height="180px" position="relative" overflow="hidden">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <VStack
        p={4}
        bg={bgColor}
        align="stretch"
        height="170px"
        justifyContent="space-between"
      >
        <Heading size="sm" noOfLines={2}>
          {article.title}
        </Heading>
        <Text fontSize="sm" noOfLines={2}>
          {article.content}
        </Text>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Flex align="center" mr={3}>
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
            >
              Премиум
            </Button>
          ) : (
            <Link href={`/${type}/${article._id}`}>
              <Button
                size="sm"
                rightIcon={<ChevronRight size={16} />}
                variant="solid"
              >
                Читать
              </Button>
            </Link>
          )}
        </Flex>
      </VStack>
    </Box>
  );
}