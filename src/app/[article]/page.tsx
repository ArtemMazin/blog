"use client";

import { articlesControllerGetOneArticle } from "@/shared/api/generated";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Article({ params }: { params: { article: string } }) {
  const router = useRouter();
  const { data: article } = useQuery({
    queryKey: ["article"],
    queryFn: () =>
      articlesControllerGetOneArticle(params.article).then((res) => res.data),
  });

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <Button variant="outline" onClick={() => router.back()}>
        Назад
      </Button>
      {article && (
        <UIMain className="flex flex-col gap-10">
          <Heading>{article?.title}</Heading>
          <Box className="max-w-2xl w-full h-96 m-auto">
            <Box className="w-full h-full relative">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + article.image}
                alt={article?.title}
                fill
                objectFit="cover"
                sizes="(max-width: 712px) 100vw, 50vw"
              />
            </Box>

            <Box fontSize="xs" className="w-full flex justify-between">
              <Text>Автор статьи: {article?.author.name}</Text>
              <Text>
                Дата публикации:{" "}
                {new Date(article.createdAt).toLocaleDateString()}
              </Text>
            </Box>
          </Box>

          <Text>{article?.content}</Text>
        </UIMain>
      )}
    </Container>
  );
}
