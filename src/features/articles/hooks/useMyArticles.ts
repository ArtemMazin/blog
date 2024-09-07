import {
  characterArticleControllerGetMyAllCharacterArticles,
  raceArticleControllerGetMyAllRaceArticles,
} from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

type ArticleType = "characters" | "races";

export const useMyArticles = (type: ArticleType) => {
  return useQuery({
    queryKey: ["articles", type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetMyAllCharacterArticles();
        return res.data;
      } else {
        const res_1 = await raceArticleControllerGetMyAllRaceArticles();
        return res_1.data;
      }
    },
  });
};
