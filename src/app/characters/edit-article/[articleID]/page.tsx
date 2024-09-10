"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { UIMain } from "@/shared/ui/ui-main";
import { useArticleUpdate } from "@/features/articles/hooks/useArticleUpdate";
import { ArticleForm } from "@/features/articles/ui/article-form";
import { useColors } from "@/shared/hooks/useColors";
import { Box, Heading } from "@chakra-ui/react";
import { useArticleByID } from "@/features/articles/hooks/useArticleByID";
import { TFormData } from "@/app/create-article/page";
import { handleSubmitArticle } from "@/features/articles/hooks/handleArticleSubmit";

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

  const methods = useForm<TFormData>({
    mode: "onBlur",
    defaultValues: {
      title: article?.title,
      content: article?.content,
      image: null,
      isPremium: article?.isPremium,
      // Поля для статьи о персонаже
      characterName: "",
      birthDate: "",
      deathDate: "",
      gender: "Другое",
      height: "",
      homeWorld: "",
      race: "",
    },
  });

  const { handleSubmit } = methods;

  const { mutate: updateArticle, isPending } = useArticleUpdate(
    params.articleID,
    "characters",
  );

  const onSubmit = handleSubmit((data: TFormData) => {
    handleSubmitArticle(data, "characters", updateArticle, toast, router);
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
