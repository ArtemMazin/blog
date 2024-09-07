import {
  characterArticleControllerDeleteCharacterArticle,
  raceArticleControllerDeleteRaceArticle,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ArticleType = "characters" | "races";

export const useArticleDelete = (id: string, type: ArticleType) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerDeleteCharacterArticle(id);
        return res.data;
      } else {
        const res_1 = await raceArticleControllerDeleteRaceArticle(id);
        return res_1.data;
      }
    },
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
