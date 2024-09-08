"use client";

import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";
import { useTopArticles } from "../hooks/useTopArticles";
import { ChevronRight, Clock, Star, Lock } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { useHandleClick } from "../hooks/useHandleClick";
import { useProfile } from "@/features/profile/hooks/useProfile";
import Link from "next/link";

interface SidebarProps {
  type: "characters" | "races";
}

export default function Sidebar({ type }: SidebarProps) {
  const { data: topArticles } = useTopArticles(type);

  const { handleClick } = useHandleClick();
  const { bgColor, borderColor, textColor } = useColors();
  const { data: user } = useProfile();

  return (
    <Box
      className="sticky top-0 h-screen overflow-y-auto max-w-xs my-4 w-full flex flex-col shrink-0 gap-4 snap-y hide-scrollbar"
      display={{ base: "none", md: "flex" }}
      borderColor={borderColor}
      p={4}
    >
      <Heading size="md" mb={4} color={textColor}>
        Популярные статьи
      </Heading>
      <VStack spacing={4} align="stretch">
        {topArticles &&
          topArticles.map((article) => (
            <Box
              key={article._id}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              position="relative"
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
                >
                  <Star size={14} style={{ marginRight: "4px" }} />
                  Премиум
                </Badge>
              )}
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + article.image}
                alt={article?.title}
                width={300}
                height={150}
                layout="responsive"
                objectFit="cover"
              />
              <Box p={3} bg={bgColor}>
                <Heading size="sm" noOfLines={2} mb={2}>
                  {article.title}
                </Heading>
                <Flex justify="space-between" align="center">
                  <Flex align="center">
                    <Clock size={14} />
                    <Text fontSize="xs" ml={1}>
                      {new Date(article.createdAt).toLocaleDateString()}
                    </Text>
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
                        colorScheme="blue"
                        variant="ghost"
                      >
                        Читать
                      </Button>
                    </Link>
                  )}
                </Flex>
              </Box>
            </Box>
          ))}
      </VStack>
    </Box>
  );
}
