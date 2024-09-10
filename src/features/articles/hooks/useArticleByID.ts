import { useQuery } from "@tanstack/react-query";
import {
  characterArticleControllerGetOneCharacterArticle,
  raceArticleControllerGetOneRaceArticle,
} from "@/shared/api/generated";

type ArticleType = "characters" | "races";

export const useArticleByID = (type: ArticleType, id: string) => {
  return useQuery({
    queryKey: ["article", id, type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetOneCharacterArticle(id);
        return res.data;
      } else {
        const res_1 = await raceArticleControllerGetOneRaceArticle(id);
        return res_1.data;
      }
    },
  });
};
