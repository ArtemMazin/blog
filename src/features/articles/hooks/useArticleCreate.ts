import { characterArticlesApi } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useArticleCreate = (reset?: () => void, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (formData: FormData) =>
      characterArticlesApi.articlesControllerCreateArticle(formData),
    onSuccess: (res) => {
      toast({
        title: "Статья опубликована",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      onClose && onClose();
      reset && reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при публикации статьи",
        status: "error",
      });
    },
  });
};
