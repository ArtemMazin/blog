"use client";

import {
  articlesControllerGetAllArticles,
  articlesControllerGetOneArticle,
} from "@/shared/api/generated";
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

  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });

  return (
    <Container maxW="8xl" className="p-10">
      <UIHeader />
      <Button variant="outline" onClick={() => router.back()}>
        Назад
      </Button>
      <UIMain className="flex gap-10">
        {articles && (
          <Box className="sticky top-0 h-screen overflow-y-auto max-w-xs py-4 w-full flex flex-col shrink-0 gap-4 snap-y hide-scrollbar">
            {articles.map((article) => (
              <Box
                key={article._id}
                className="w-full h-40 flex flex-col justify-end shrink-0 relative rounded-lg bg-white snap-start"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + article.image}
                  alt={article?.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 712px) 100vw, 50vw"
                />
                <Box
                  position="absolute"
                  className="p-2 w-full flex flex-col gap-2"
                >
                  <Heading size={"xs"} noOfLines={2}>
                    {article.title}
                  </Heading>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push("/article/" + article._id)}
                  >
                    Подробнее
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
        {article && (
          <Box className="sticky top-0 h-max p-4 flex flex-col gap-10">
            <Heading>{article?.title}</Heading>
            <Box className="max-w-2xl w-full shrink-0 h-96 mx-auto">
              <Box className="w-full h-full relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + article.image}
                  alt={article?.title}
                  fill
                  className="object-cover"
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
          </Box>
        )}
      </UIMain>
    </Container>
  );
}
