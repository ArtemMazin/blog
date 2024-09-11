import { UpdateCharacterArticleDto } from "@/shared/api/generated";
import { UseToastOptions } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleCharacterArticleSubmit = (
  data: UpdateCharacterArticleDto,
  updateArticle: (data: UpdateCharacterArticleDto) => void,
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

  const characterArticleData: UpdateCharacterArticleDto = {
    title: data.title,
    content: data.content,
    isPremium: data.isPremium ? "true" : "false",
    image: data.image,
    characterName: data.characterName || "",
    birthDate: data.birthDate,
    deathDate: data.deathDate,
    race: data.race || "",
    gender: data.gender || "Другое",
    height: data.height,
    homeWorld: data.homeWorld || "",
  };

  updateArticle(characterArticleData);
  router.push("/");
};
