import {
  characterArticleControllerCreateCharacterArticle,
  CreateCharacterArticleDto,
  raceArticleControllerCreateRaceArticle,
  CreateRaceArticleDto,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ArticleType = "characters" | "races";

export const useArticleCreate = (
  type: ArticleType,
  reset?: () => void,
  onClose?: () => void,
) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (
      articleData: CreateCharacterArticleDto | CreateRaceArticleDto,
    ) => {
      if (type === "characters") {
        const res = await characterArticleControllerCreateCharacterArticle(
          articleData as CreateCharacterArticleDto,
        );
        return res.data;
      } else {
        const res = await raceArticleControllerCreateRaceArticle(
          articleData as CreateRaceArticleDto,
        );
        return res.data;
      }
    },
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
