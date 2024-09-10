import {
  characterArticleControllerUpdateCharacterArticle,
  raceArticleControllerUpdateRaceArticle,
  UpdateCharacterArticleDto,
  UpdateRaceArticleDto,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ArticleType = "characters" | "races";

export const useArticleUpdate = (id: string, type: ArticleType) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (
      articleData: UpdateCharacterArticleDto | UpdateRaceArticleDto,
    ) => {
      if (type === "characters") {
        const res = await characterArticleControllerUpdateCharacterArticle(
          id,
          articleData as UpdateCharacterArticleDto,
        );
        return res.data;
      } else {
        const res = await raceArticleControllerUpdateRaceArticle(
          id,
          articleData as UpdateRaceArticleDto,
        );
        return res.data;
      }
    },
    onSuccess: (res) => {
      toast({
        title: "Статья изменена",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["article"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
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
