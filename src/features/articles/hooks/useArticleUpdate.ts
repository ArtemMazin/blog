import { articlesControllerUpdateArticle } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useArticleUpdate = (
  id: string,
  reset?: () => void,
  onClose?: () => void,
) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (formData: FormData) =>
      articlesControllerUpdateArticle(id, formData, {
        withCredentials: true,
      }),
    onSuccess: (res) => {
      toast({
        title: "Статья изменена",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["article"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      onClose && onClose();
      reset && reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при изменении статьи",
        status: "error",
      });
    },
  });
};
