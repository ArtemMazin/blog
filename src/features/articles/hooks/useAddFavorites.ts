import { articlesControllerAddArticleToFavorites } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddFavorites = () => {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: ["user"] });
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
