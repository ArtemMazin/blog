"use client";

import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { useRaceArticleCreate } from "@/features/articles/hooks/useRaceArticleCreate";
import { CreateRaceArticleDto } from "@/shared/api/generated";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";

export type TRaceFormData = Omit<CreateRaceArticleDto, "image"> & {
  image: FileList | null;
  distinctiveFeatures: string;
  knownRepresentatives: string;
};

export default function CreateRaceArticleForm() {
  const router = useRouter();
  const toast = useToast();
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
      toast({
        title: "Ошибка",
        description: "Выберите изображение",
        status: "error",
      });
      return;
    }

    const raceArticleData: CreateRaceArticleDto = {
      ...data,
      image: data.image[0],
      isPremium: data.isPremium ? "true" : "false",
    };

    createRaceArticle(raceArticleData);
    router.push("/");
  });

  return (
    <FormProvider {...methods}>
      <ArticleForm
        submitHandler={onSubmit}
        onClose={() => router.push("/")}
        isPending={isPending}
        articleType="races"
      />
    </FormProvider>
  );
}
