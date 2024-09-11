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
import { handleSubmitArticle } from "@/features/articles/hooks/handleArticleSubmit";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";
import { UpdateRaceArticleDto } from "@/shared/api/generated";

export default function EditArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();

  // Запрос на получение данных статьи
  const { data: article } = useArticleByID("races", params.articleID);

  const methods = useForm<UpdateRaceArticleDto>({
    mode: "onBlur",
    defaultValues: {
      title: article?.title,
      content: article?.content,
      image: undefined,
      class: article?.class || "",
      // distinctiveFeatures: article?.distinctiveFeatures || "",
      language: article?.language || "",
      raceName: article?.raceName || "",
      skinColor: article?.skinColor || "",
      type: article?.type || "",
      // knownRepresentatives: article?.knownRepresentatives || "",
    },
  });

  const { handleSubmit } = methods;

  const { mutate: updateArticle, isPending } = useArticleUpdate(
    params.articleID,
    "races",
  );

  const onSubmit = handleSubmit((data: UpdateRaceArticleDto) => {
    handleSubmitArticle(data, "races", updateArticle, toast, router);
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
            articleType={"races"}
          />
        </FormProvider>
      </Box>
    </UIMain>
  );
}
