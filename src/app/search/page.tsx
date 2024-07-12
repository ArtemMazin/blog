"use client";

import * as React from "react";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { useSearch } from "@/features/articles/hooks/useSearch";

export default function ArticleList() {
  const articles = useSearch();

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain>
        <SimpleGrid minChildWidth="320px" spacing="40px">
          {articles?.map((article) => (
            <Link href={`/${article._id}`} key={article.title}>
              <Box
                position={"relative"}
                height={"300px"}
                className="flex flex-col justify-end"
              >
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
                  className="h-40 bg-black/50 hover:bg-black transition-all duration-200"
                >
                  <Heading noOfLines={1}>{article.title}</Heading>
                  <Text noOfLines={4}>{article.content}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </UIMain>
    </Container>
  );
}
