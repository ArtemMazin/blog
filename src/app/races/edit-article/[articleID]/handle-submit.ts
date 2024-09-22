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
    ...data,
    isPremium: data.isPremium ? "true" : "false",
    knownRepresentatives: Array.isArray(data.knownRepresentatives)
      ? data.knownRepresentatives.join(",")
      : "",
    distinctiveFeatures: Array.isArray(data.distinctiveFeatures)
      ? data.distinctiveFeatures.join(", ")
      : data.distinctiveFeatures,
  };

  updateArticle(raceArticleData);
  router.push("/");
};
