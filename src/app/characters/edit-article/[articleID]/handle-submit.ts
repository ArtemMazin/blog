import { UpdateCharacterArticleDto } from "@/shared/api/generated";
import { UseToastOptions } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleCharacterArticleSubmit = (
  data: UpdateCharacterArticleDto,
  updateArticle: (data: UpdateCharacterArticleDto) => void,
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

  const characterArticleData: UpdateCharacterArticleDto = {
    ...data,
    isPremium: data.isPremium ? "true" : "false",
  };

  updateArticle(characterArticleData);
  router.push("/");
};
