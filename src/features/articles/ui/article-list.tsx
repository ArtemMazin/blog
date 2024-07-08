"use client";

import * as React from "react";
import { articlesControllerGetAllArticles } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { useProfile } from "@/features/auth/hooks/useProfile";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

export function ArticleList() {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });

  useProfile();

  return (
    <div>
      <SimpleGrid minChildWidth="400px" spacing="40px">
        {articles?.map((article) => (
          <Box
            key={article.title}
            position={"relative"}
            width={"400px"}
            height={"300px"}
            className="flex flex-col justify-end"
          >
            <Image
              src={`http:localhost:5000/${article.image}`}
              alt={article.title}
              fill
            />
            <Box
              position="absolute"
              p={2}
              cursor={"pointer"}
              color={"var(--primarycontent)"}
              bg={"rgba(0, 0, 0, 0.5)"}
              width={"100%"}
            >
              <Heading noOfLines={1}>{article.title}</Heading>
              <Text
                noOfLines={5}
                _hover={{
                  noOfLines: 10,
                }}
              >
                {article.content}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}
