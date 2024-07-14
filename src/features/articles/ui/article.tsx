"use client";

import { articlesControllerGetOneArticle } from "@/shared/api/generated";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Article({ id }: { id: string }) {
  const router = useRouter();

  const { data: article } = useQuery({
    queryKey: ["article"],
    queryFn: () => articlesControllerGetOneArticle(id).then((res) => res.data),
  });

  return (
    <Box className="sticky top-0 h-max p-4 flex flex-col gap-10">
      {article && (
        <>
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
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="self-end"
          >
            Назад
          </Button>
        </>
      )}
    </Box>
  );
}
