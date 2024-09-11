"use client";

import * as React from "react";
import { UIMain } from "@/shared/ui/ui-main";
import { useColors } from "@/shared/hooks/useColors";
import { Heading, Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useRaceArticleCreate } from "@/features/articles/hooks/useRaceArticleCreate";
import { CreateRaceArticleDto } from "@/shared/api/generated";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";

export type TRaceFormData = Omit<CreateRaceArticleDto, "image"> & {
  image: FileList | null;
  distinctiveFeatures: string;
  knownRepresentatives: string;
};

export default function CreateRaceArticlePage() {
  const router = useRouter();
  const { bgColor, textColor } = useColors();
  const { mutate: createRaceArticle, isPending } = useRaceArticleCreate();

  const methods = useForm<TRaceFormData>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: null,
      class: "",
      distinctiveFeatures: "",
      language: "",
      raceName: "",
      skinColor: "",
      type: "",
      knownRepresentatives: "",
      homeWorld: "",
    },
  });

  const onSubmit = methods.handleSubmit((data: TRaceFormData) => {
    if (!data.image?.[0]) {
      // Показать ошибку
      return;
    }

    const raceArticleData: CreateRaceArticleDto = {
      ...data,
      image: data.image[0],
      isPremium: data.isPremium ? "true" : "false",
      distinctiveFeatures: data.distinctiveFeatures
        .split(",")
        .map((item) => item.trim()),
      knownRepresentatives: data.knownRepresentatives
        ? data.knownRepresentatives.split(",").map((item) => item.trim())
        : undefined,
    };

    createRaceArticle(raceArticleData);
  });

  return (
    <UIMain>
      <Box bg={bgColor} borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6} color={textColor}>
          Создать статью о расе
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
