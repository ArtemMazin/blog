import {
  ToggleFavoriteArticleDto,
  usersControllerToggleFavoriteArticle,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useToggleFavorites = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: ({ action, articleId }: ToggleFavoriteArticleDto) =>
      usersControllerToggleFavoriteArticle({ action, articleId }),
    onSuccess: (_, variables) => {
      const { action } = variables;
      const title =
        action === "add"
          ? "Статья добавлена в избранное"
          : "Статья удалена из избранного";

      toast({
        title,
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description:
          error instanceof Error ? error.message : "Произошла ошибка",
        status: "error",
      });
    },
  });
};
