"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { UIMain } from "@/shared/ui/ui-main";
import { useArticleUpdate } from "@/features/articles/hooks/useArticleUpdate";
import { useColors } from "@/shared/hooks/useColors";
import { Box, Heading } from "@chakra-ui/react";
import { useArticleByID } from "@/features/articles/hooks/useArticleByID";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";
import { UpdateCharacterArticleDto } from "@/shared/api/generated";
import { handleCharacterArticleSubmit } from "./handle-submit";

export default function EditArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();

  // Запрос на получение данных статьи
  const { data: article } = useArticleByID("characters", params.articleID);

  const methods = useForm<UpdateCharacterArticleDto>({
    mode: "onBlur",
    defaultValues: {
      title: article?.title,
      content: article?.content,
      characterName: article?.characterName || "",
      birthDate: article?.birthDate || "",
      deathDate: article?.deathDate || "",
      gender: "Другое",
      height: article?.height,
      homeWorld: article?.homeWorld || "",
      race: article?.race.raceName || "",
    },
  });

  const { mutate: updateArticle, isPending } = useArticleUpdate(
    params.articleID,
    "characters",
  );

  const onSubmit = methods.handleSubmit((data: UpdateCharacterArticleDto) => {
    handleCharacterArticleSubmit(data, updateArticle, toast, router);
  });

  return (
    <UIMain>
      <Box bg={bgColor} borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6} color={textColor}>
          Редактировать статью
        </Heading>
        <FormProvider {...methods}>
          <ArticleForm
            submitHandler={onSubmit}
            onClose={() => router.push("/")}
            isPending={isPending}
            articleType={"characters"}
          />
        </FormProvider>
      </Box>
    </UIMain>
  );
}
