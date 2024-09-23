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
  UpdateCharacterArticleDto,
  ResponseCharacterArticleDto,
} from "@/shared/api/generated";
import { handleCharacterArticleSubmit } from "./handle-submit";

interface EditArticleContentProps {
  initialArticleData: ResponseCharacterArticleDto;
  articleID: string;
}

export default function EditArticleContent({
  initialArticleData,
  articleID,
}: EditArticleContentProps) {
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();

  const methods = useForm<UpdateCharacterArticleDto>({
    mode: "onBlur",
    defaultValues: {
      title: initialArticleData.title,
      content: initialArticleData.content,
      characterName: initialArticleData.characterName || "",
      birthDate: initialArticleData.birthDate || "",
      deathDate: initialArticleData.deathDate || "",
      image: initialArticleData.image || undefined,
      height: initialArticleData.height,
      homeWorld: initialArticleData.homeWorld || "",
      race: initialArticleData.race?.raceName || "",
    },
  });

  const { mutate: updateArticle, isPending } = useArticleUpdate(
    articleID,
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
            articleType="characters"
          />
        </FormProvider>
      </Box>
    </UIMain>
  );
}
