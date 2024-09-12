"use client";

import * as React from "react";
import { UIMain } from "@/shared/ui/ui-main";
import { useColors } from "@/shared/hooks/useColors";
import { Heading, Box, useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCharacterArticleCreate } from "@/features/articles/hooks/useCharacterArticleCreate";
import { CreateCharacterArticleDto } from "@/shared/api/generated";
import { ArticleForm } from "@/features/articles/ui/article-form/article-form";

export type TCharacterFormData = Omit<CreateCharacterArticleDto, "image"> & {
  image: FileList | null;
};

export default function CreateCharacterArticlePage() {
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();
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
    <UIMain>
      <Box bg={bgColor} borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6} color={textColor}>
          Создать статью о персонаже
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
