import { articlesControllerRemoveArticlesToFavorites } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

export const useRemoveFavorites = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: (articleId: string) =>
      articlesControllerRemoveArticlesToFavorites(articleId, {
        withCredentials: true,
      }),
    onSuccess: (res) => {
      toast({
        title: "Статья удалена из избранного",
        status: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при удалении статьи",
        status: "error",
      });
    },
  });
};
