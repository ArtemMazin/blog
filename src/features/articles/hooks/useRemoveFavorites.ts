import { articlesControllerRemoveArticlesToFavorites } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveFavorites = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (articleId: string) =>
      articlesControllerRemoveArticlesToFavorites(articleId),
    onSuccess: (res) => {
      toast({
        title: "Статья удалена из избранного",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
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
