"use client";

import * as React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ArticleDto } from "@/shared/api/generated";
import { ModalUpdatingArticle } from "./modal-updating-article";
import { useProfile } from "@/features/auth/hooks/useProfile";

export interface IArticleListProps {
  articles: ArticleDto[];
}

export function ArticleList({ articles }: IArticleListProps) {
  return (
    <SimpleGrid minChildWidth="320px" spacing="40px">
      {articles?.length === 0 ? (
        <Box className="flex flex-col items-center justify-center">
          <Heading>Не найдено ни одной статьи</Heading>
        </Box>
      ) : (
        articles?.map((article) => (
          <Link
            href={`/${article._id}`}
            key={article.title}
            className="max-w-2xl"
          >
            <Box position={"relative"} height={"300px"}>
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 712px) 100vw, (max-width: 1072px) 50vw, 25vw"
              />
              <Box
                position="absolute"
                p={2}
                cursor={"pointer"}
                color={"var(--primarycontent)"}
                width={"100%"}
                bottom={0}
                className="h-40 bg-black/50 hover:bg-black transition-all duration-200"
              >
                <Heading noOfLines={1}>{article.title}</Heading>
                <Text noOfLines={4}>{article.content}</Text>
              </Box>
            </Box>
          </Link>
        ))
      )}
    </SimpleGrid>
  );
}
