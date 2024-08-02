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
  useToast,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { ArticleDto } from "@/shared/api/generated";
import { ArrowRight, BookOpen, Star, Lock } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { useRouter } from "next/navigation";
import { useProfile } from "@/features/profile/hooks/useProfile";
import Link from "next/link";

export interface IArticleListProps {
  articles: ArticleDto[];
}

export function ArticleList({ articles }: IArticleListProps) {
  const { bgColor, textColor, primaryColor, secondaryColor } = useColors();
  const router = useRouter();
  const toast = useToast();
  const { data: user } = useProfile();

  const handleClick = (article: ArticleDto) => {
    if (article.isPremium && !user?.isPremium) {
      toast({
        title: "Ошибка",
        description:
          "Для просмотра этой статьи необходимо подписаться на премиум",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    router.push(`/${article._id}`);
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {articles?.length === 0 ? (
        <Box textAlign="center" gridColumn="1 / -1">
          <Heading>Не найдено ни одной статьи</Heading>
        </Box>
      ) : (
        articles?.map((article) => (
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
                    <Text fontSize="xs">5 мин</Text>
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
                  <Link href={`/${article._id}`}>
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
