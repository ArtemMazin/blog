import { TFormData } from "@/app/create-article/page";
import {
  UpdateCharacterArticleDto,
  UpdateRaceArticleDto,
} from "@/shared/api/generated";
import { UseToastOptions } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSubmitArticle = (
  data: TFormData,
  articleType: "characters" | "races",
  updateArticle: (
    data: UpdateCharacterArticleDto | UpdateRaceArticleDto,
  ) => void,
  toast: (options: UseToastOptions) => void,
  router: AppRouterInstance,
) => {
  if (!data?.image?.[0]) {
    toast({
      title: "Ошибка",
      description: "Выберите изображение",
      status: "error",
    });
    return;
  }

  const isPremium = data.isPremium ? "true" : "false";

  if (articleType === "characters") {
    const characterArticleData: UpdateCharacterArticleDto = {
      title: data.title,
      content: data.content,
      isPremium,
      image: data.image[0],
      characterName: data.characterName || "",
      birthDate: data.birthDate,
      deathDate: data.deathDate,
      race: data.race || "",
      gender: data.gender || "Другое",
      height: data.height,
      homeWorld: data.homeWorld || "",
    };
    updateArticle(characterArticleData);
  } else {
    const raceArticleData: UpdateRaceArticleDto = {
      title: data.title,
      content: data.content,
      isPremium,
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

  router.push("/");
};
