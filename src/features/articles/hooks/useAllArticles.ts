import { useQuery } from "@tanstack/react-query";
import {
  characterArticleControllerGetAllCharacterArticles,
  raceArticleControllerGetAllRaceArticles,
} from "@/shared/api/generated";

type ArticleType = "characters" | "races";

export const useAllArticles = (type: ArticleType) => {
  return useQuery({
    queryKey: ["articles", type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetAllCharacterArticles();
        return res.data;
      } else {
        const res_1 = await raceArticleControllerGetAllRaceArticles();
        return res_1.data;
      }
    },
  });
};
