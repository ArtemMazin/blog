import { articlesControllerDeleteArticle } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useArticleDelete = (id: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: () =>
      articlesControllerDeleteArticle(id, {
        withCredentials: true,
      }),
    onSuccess: (res) => {
      toast({
        title: "Статья удалена",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["article"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
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
