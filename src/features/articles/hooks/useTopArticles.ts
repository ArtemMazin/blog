import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  characterArticleControllerGetTopCharacterArticles,
  raceArticleControllerGetTopRaceArticles,
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

function useTopArticles(
  type: "characters",
): UseQueryResult<ResponseCharacterArticleDto[], Error>;
function useTopArticles(
  type: "races",
): UseQueryResult<ResponseRaceArticleDto[], Error>;
function useTopArticles(
  type: "characters" | "races",
): UseQueryResult<
  ResponseCharacterArticleDto[] | ResponseRaceArticleDto[],
  Error
> {
  return useQuery({
    queryKey: ["articles", type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetTopCharacterArticles();
        return res.data;
      } else {
        const res = await raceArticleControllerGetTopRaceArticles();
        return res.data;
      }
    },
  });
}

export { useTopArticles };
