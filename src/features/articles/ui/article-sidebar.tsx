"use client";

import { Box, Button, Heading, VStack, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useAllArticles } from "../hooks/useAllArticles";
import { ChevronRight, Clock } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export default function Sidebar() {
  const router = useRouter();
  const articles = useAllArticles();
  const { bgColor, borderColor, textColor } = useColors();

  return (
    <Box
      className="sticky top-0 h-screen overflow-y-auto max-w-xs my-4 w-full flex flex-col shrink-0 gap-4 snap-y hide-scrollbar"
      display={{ base: "none", md: "flex" }}
      borderColor={borderColor}
      p={4}
    >
      <Heading size="md" mb={4} color={textColor}>
        Другие статьи
      </Heading>
      <VStack spacing={4} align="stretch">
        {articles &&
          articles.slice(0, 5).map((article) => (
            <Box
              key={article._id}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
            >
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + article.image}
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
                  <Button
                    size="sm"
                    rightIcon={<ChevronRight size={16} />}
                    onClick={() => router.push(article._id)}
                    colorScheme="blue"
                    variant="ghost"
                  >
                    Читать
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
      </VStack>
    </Box>
  );
}
