import {
  characterArticleControllerLikeCharacterArticle,
  characterArticleControllerUnlikeCharacterArticle,
  ToggleFavoriteArticleDto,
} from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLikeCharacterArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ action, articleId }: ToggleFavoriteArticleDto) =>
      action === "add"
        ? characterArticleControllerLikeCharacterArticle(articleId)
        : characterArticleControllerUnlikeCharacterArticle(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {},
  });
};
