"use client";

import * as React from "react";
import { UIMain } from "@/shared/ui/ui-main";
import { useArticleCreate } from "@/features/articles/hooks/useArticleCreate";
import { ArticleForm } from "@/features/articles/ui/article-form";
import { useColors } from "@/shared/hooks/useColors";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Box,
  useToast,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import {
  CreateCharacterArticleDtoIsPremium,
  CreateCharacterArticleDto,
  CreateCharacterArticleDtoGender,
  CreateRaceArticleDto,
} from "@/shared/api/generated";
import { useRouter } from "next/navigation";

// Тип данных формы
export type TFormData = {
  title: string;
  content: string;
  isPremium: boolean;
  image: FileList | null;
  // Поля для статьи о персонаже
  characterName: string;
  birthDate?: string;
  deathDate?: string;
  gender: CreateCharacterArticleDtoGender;
  height?: string;
  homeWorld: string;
  race: string;
  // Поля для статьи о расе
  class: string;
  distinctiveFeatures: string;
  language: string;
  raceName: string;
  skinColor: string;
  type: string;
  knownRepresentatives?: string;
};

export default function CreateArticlePage() {
  const [articleType, setArticleType] = React.useState<"characters" | "races">(
    "characters",
  );
  const router = useRouter();
  const toast = useToast();
  const { bgColor, textColor } = useColors();
  const methods = useForm<TFormData>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: null,
      isPremium: false,
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

  const { reset, handleSubmit } = methods;

  const { mutate: createArticle, isPending } = useArticleCreate(
    articleType,
    reset,
    () => router.push("/"),
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

    const isPremium: CreateCharacterArticleDtoIsPremium = data.isPremium
      ? "true"
      : "false";

    if (articleType === "characters") {
      const characterArticleData: CreateCharacterArticleDto = {
        title: data.title,
        content: data.content,
        isPremium: isPremium,
        image: data.image[0],
        characterName: data.characterName || "",
        birthDate: data.birthDate,
        deathDate: data.deathDate,
        race: data.race || "",
        gender: (data.gender as CreateCharacterArticleDtoGender) || "Другое",
        height: data.height,
        homeWorld: data.homeWorld || "",
      };
      createArticle(characterArticleData);
    } else {
      const raceArticleData: CreateRaceArticleDto = {
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
      createArticle(raceArticleData);
    }
  });

  return (
    <UIMain>
      <Box bg={bgColor} borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h1" mb={6} color={textColor}>
          Создать новую статью
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
