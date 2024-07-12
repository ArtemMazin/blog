import { articlesControllerCreateArticle } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useArticleCreate = (reset?: () => void, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (formData: FormData) =>
      articlesControllerCreateArticle(formData, {
        withCredentials: true,
      }),
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
