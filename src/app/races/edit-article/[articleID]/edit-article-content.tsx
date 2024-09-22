"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { UIMain } from "@/shared/ui/ui-main";
import { useArticleUpdate } from "@/features/articles/hooks/useArticleUpdate";
import { useColors } from "@/shared/hooks/useColors";
import { Box, Heading } from "@chakra-ui/react";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";
import {
  UpdateRaceArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";
import { handleRaceArticleSubmit } from "./handle-submit";

interface EditArticleContentProps {
  initialArticleData: ResponseRaceArticleDto;
  articleID: string;
}

export default function EditArticleContent({
  initialArticleData,
  articleID,
}: EditArticleContentProps) {
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();

  const methods = useForm<UpdateRaceArticleDto>({
    mode: "onBlur",
    defaultValues: {
      title: initialArticleData.title,
      content: initialArticleData.content,
      image: initialArticleData.image || undefined,
      class: initialArticleData.class || "",
      language: initialArticleData.language || "",
      raceName: initialArticleData.raceName || "",
      skinColor: initialArticleData.skinColor || "",
      type: initialArticleData.type || "",
      homeWorld: initialArticleData.homeWorld || "",
      distinctiveFeatures:
        initialArticleData.distinctiveFeatures.toString() || "",
      knownRepresentatives:
        initialArticleData.knownRepresentatives.toString() || "",
    },
  });

  const { handleSubmit } = methods;

  const { mutate: updateArticle, isPending } = useArticleUpdate(
    articleID,
    "races",
  );

  const onSubmit = handleSubmit((data: UpdateRaceArticleDto) => {
    handleRaceArticleSubmit(data, updateArticle, toast, router);
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
            articleType="races"
          />
        </FormProvider>
      </Box>
    </UIMain>
  );
}
