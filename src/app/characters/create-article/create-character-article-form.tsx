"use client";

import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { useCharacterArticleCreate } from "@/features/articles/hooks/useCharacterArticleCreate";
import { CreateCharacterArticleDto } from "@/shared/api/generated";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";

export type TCharacterFormData = Omit<CreateCharacterArticleDto, "image"> & {
  image: FileList | null;
};

export default function CreateCharacterArticleForm() {
  const router = useRouter();
  const toast = useToast();
  const { mutate: createCharacterArticle, isPending } =
    useCharacterArticleCreate();

  const methods = useForm<TCharacterFormData>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: null,
      characterName: "",
      birthDate: "",
      deathDate: "",
      gender: "Другое",
      height: "",
      homeWorld: "",
      race: "",
    },
  });

  const onSubmit = methods.handleSubmit((data: TCharacterFormData) => {
    if (!data.image?.[0]) {
      toast({
        title: "Ошибка",
        description: "Выберите изображение",
        status: "error",
      });
      return;
    }

    const characterArticleData: CreateCharacterArticleDto = {
      ...data,
      image: data.image[0],
      isPremium: data.isPremium ? "true" : "false",
    };

    createCharacterArticle(characterArticleData);
    router.push("/");
  });

  return (
    <FormProvider {...methods}>
      <ArticleForm
        submitHandler={onSubmit}
        onClose={() => router.push("/")}
        isPending={isPending}
        articleType="characters"
      />
    </FormProvider>
  );
}
