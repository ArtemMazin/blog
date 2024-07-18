import { articlesControllerUpdateArticle } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useProfileUpdate = (
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
        title: "Профиль изменен",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onClose && onClose();
      reset && reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при изменении профиля",
        status: "error",
      });
    },
  });
};
