"use client";

import { articlesControllerGetOneArticle } from "@/shared/api/generated";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { ModalUpdatingArticle } from "./modal-updating-article";
import { ModalDeletingArticle } from "./modal-deleting-article";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useAddFavorites } from "../hooks/useAddFavorites";
import { SubmitHandler } from "react-hook-form";
import { UIButton } from "@/shared/ui/ui-button";

export default function Article({ id }: { id: string }) {
  const router = useRouter();
  const { data: user } = useProfile();

  const { data: article } = useQuery({
    queryKey: ["article"],
    queryFn: () => articlesControllerGetOneArticle(id).then((res) => res.data),
  });

  const { mutate: addToFavorites } = useAddFavorites();

  const handleClick: SubmitHandler<{ articleId: string }> = ({ articleId }) => {
    addToFavorites(articleId);
  };

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
          <Box className="flex gap-2 justify-end">
            {user && article.author._id === user._id && (
              <>
                <ModalDeletingArticle id={article._id} />
                <ModalUpdatingArticle article={article} />
              </>
            )}
            <UIButton onClick={() => handleClick({ articleId: article._id })}>
              Добавить в избранное
            </UIButton>
            <Button variant="outline" onClick={() => router.back()}>
              Назад
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
