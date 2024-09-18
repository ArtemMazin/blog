import {
  raceArticleControllerCreateRaceArticle,
  CreateRaceArticleDto,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRaceArticleCreate = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (articleData: CreateRaceArticleDto) => {
      const res = await raceArticleControllerCreateRaceArticle(articleData);
      return res.data;
    },
    onSuccess: (res) => {
      toast({
        title: "Статья о расе опубликована",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["articles", "races"] });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description:
          error?.message || "Произошла ошибка при публикации статьи о расе",
        status: "error",
      });
    },
  });
};
