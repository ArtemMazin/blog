import {
  characterArticleControllerSearchCharacterArticles,
  raceArticleControllerSearchRaceArticles,
} from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

type ArticleType = "characters" | "races";

export const useSearch = (type: ArticleType) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");
  return useQuery({
    queryKey: ["search", search, type],
    queryFn: async () => {
      if (!search) return;

      if (type === "characters") {
        const res = await characterArticleControllerSearchCharacterArticles({
          query: search,
        });
        return res.data;
      } else {
        const res_1 = await raceArticleControllerSearchRaceArticles({
          query: search,
        });
        return res_1.data;
      }
    },
  });
};
