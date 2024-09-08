import {
  characterArticleControllerLikeCharacterArticle,
  characterArticleControllerUnlikeCharacterArticle,
  raceArticleControllerLikeRaceArticle,
  raceArticleControllerUnlikeRaceArticle,
  ToggleFavoriteArticleDto,
} from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLikeRaceArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ action, articleId }: ToggleFavoriteArticleDto) =>
      action === "add"
        ? raceArticleControllerLikeRaceArticle(articleId)
        : raceArticleControllerUnlikeRaceArticle(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {},
  });
};
