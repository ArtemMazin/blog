import { UpdateRaceArticleDto } from "@/shared/api/generated";
import { UseToastOptions } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleRaceArticleSubmit = (
  data: UpdateRaceArticleDto,
  updateArticle: (data: UpdateRaceArticleDto) => void,
  toast: (options: UseToastOptions) => void,
  router: AppRouterInstance,
) => {
  if (!data?.image) {
    toast({
      title: "Ошибка",
      description: "Выберите изображение",
      status: "error",
    });
    return;
  }

  const raceArticleData: UpdateRaceArticleDto = {
    title: data.title,
    content: data.content,
    isPremium: data.isPremium ? "true" : "false",
    image: data.image,
    raceName: data.raceName || "",
    type: data.type || "",
    class: data.class || "",
    skinColor: data.skinColor || "",
    distinctiveFeatures: data.distinctiveFeatures,
    homeWorld: data.homeWorld || "",
    language: data.language || "",
    knownRepresentatives: data.knownRepresentatives,
  };

  updateArticle(raceArticleData);
  router.push("/");
};
