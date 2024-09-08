import { useQuery } from "@tanstack/react-query";
import {
  characterArticleControllerGetTopCharacterArticles,
  raceArticleControllerGetTopRaceArticles,
} from "@/shared/api/generated";

type ArticleType = "characters" | "races";

export const useTopArticles = (type: ArticleType) => {
  return useQuery({
    queryKey: ["articles", type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetTopCharacterArticles();
        return res.data;
      } else {
        const res_1 = await raceArticleControllerGetTopRaceArticles();
        return res_1.data;
      }
    },
  });
};
