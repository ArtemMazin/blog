"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { UIMain } from "@/shared/ui/ui-main";
import { useArticleUpdate } from "@/features/articles/hooks/useArticleUpdate";
import { ArticleForm } from "@/features/articles/ui/article-form";
import { useColors } from "@/shared/hooks/useColors";
import { Box, Heading } from "@chakra-ui/react";
import { TFormData } from "../../create-article/page";
import {
  UpdateCharacterArticleDto,
  UpdateCharacterArticleDtoGender,
  UpdateCharacterArticleDtoIsPremium,
  UpdateRaceArticleDto,
} from "@/shared/api/generated";

export default function EditArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const [articleType, setArticleType] = React.useState<"characters" | "races">(
    "characters",
  );
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();

  const { data: article } = useArticleUpdate(params.article, articleType);

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
      // Поля для статьи о расе
      class: "",
      distinctiveFeatures: "",
      language: "",
      raceName: "",
      skinColor: "",
      type: "",
      knownRepresentatives: "",
    },
  });

  const { handleSubmit } = methods;

  const { mutate: updateArticle, isPending } = useArticleUpdate(
    params.article,
    articleType,
  );

  const submitHandler = handleSubmit((data: TFormData) => {
    if (!data?.image?.[0]) {
      toast({
        title: "Ошибка",
        description: "Выберите изображение",
        status: "error",
      });
      return;
    }

    const isPremium: UpdateCharacterArticleDtoIsPremium = data.isPremium
      ? "true"
      : "false";

    if (articleType === "characters") {
      const characterArticleData: UpdateCharacterArticleDto = {
        title: data.title,
        content: data.content,
        isPremium: isPremium,
        image: data.image[0],
        characterName: data.characterName || "",
        birthDate: data.birthDate,
        deathDate: data.deathDate,
        race: data.race || "",
        gender: (data.gender as UpdateCharacterArticleDtoGender) || "Другое",
        height: data.height,
        homeWorld: data.homeWorld || "",
      };
      updateArticle(characterArticleData);
    } else {
      const raceArticleData: UpdateRaceArticleDto = {
        title: data.title,
        content: data.content,
        isPremium: isPremium,
        image: data.image[0],
        raceName: data.raceName || "",
        type: data.type || "",
        class: data.class || "",
        skinColor: data.skinColor || "",
        distinctiveFeatures:
          data.distinctiveFeatures
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item !== "") || [],
        homeWorld: data.homeWorld || "",
        language: data.language || "",
        knownRepresentatives:
          (data.knownRepresentatives &&
            data.knownRepresentatives
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item !== "")) ||
          [],
      };
      updateArticle(raceArticleData);
    }
  });

  return (
    <UIMain>
      <Box bg={bgColor} borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6} color={textColor}>
          Редактировать статью
        </Heading>
        <FormProvider {...methods}>
          <RadioGroup
            onChange={(value) =>
              setArticleType(value as "characters" | "races")
            }
            value={articleType}
            mb={4}
          >
            <Stack direction="row">
              <Radio value="characters">Персонаж</Radio>
              <Radio value="races">Раса</Radio>
            </Stack>
          </RadioGroup>
          <ArticleForm
            submitHandler={submitHandler}
            onClose={() => router.push("/")}
            isPending={isPending}
            articleType={articleType}
          />
        </FormProvider>
      </Box>
    </UIMain>
  );
}
