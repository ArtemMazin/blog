import {
  characterArticleControllerCreateCharacterArticle,
  CreateCharacterArticleDto,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCharacterArticleCreate = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (articleData: CreateCharacterArticleDto) => {
      const res =
        await characterArticleControllerCreateCharacterArticle(articleData);
      return res.data;
    },
    onSuccess: (res) => {
      toast({
        title: "Статья о персонаже опубликована",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["articles", "characters"] });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description:
          error?.message ||
          "Произошла ошибка при публикации статьи о персонаже",
        status: "error",
      });
    },
  });
};
