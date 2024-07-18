import { articlesControllerAddArticleToFavorites } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

export const useAddFavorites = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: (articleId: string) =>
      articlesControllerAddArticleToFavorites(articleId, {
        withCredentials: true,
      }),
    onSuccess: () => {
      toast({
        title: "Статья добавлена в избранное",
        status: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при добавлении статьи",
        status: "error",
      });
    },
  });
};
