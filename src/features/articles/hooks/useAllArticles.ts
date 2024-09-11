import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  characterArticleControllerGetAllCharacterArticles,
  raceArticleControllerGetAllRaceArticles,
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

function useAllArticles(
  type: "characters",
): UseQueryResult<ResponseCharacterArticleDto[], Error>;
function useAllArticles(
  type: "races",
): UseQueryResult<ResponseRaceArticleDto[], Error>;
function useAllArticles(
  type: "characters" | "races",
): UseQueryResult<
  ResponseCharacterArticleDto[] | ResponseRaceArticleDto[],
  Error
> {
  return useQuery({
    queryKey: ["articles", type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetAllCharacterArticles();
        return res.data;
      } else {
        const res = await raceArticleControllerGetAllRaceArticles();
        return res.data;
      }
    },
  });
}

export { useAllArticles };
