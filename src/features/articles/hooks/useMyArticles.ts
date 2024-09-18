import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  characterArticleControllerGetMyAllCharacterArticles,
  raceArticleControllerGetMyAllRaceArticles,
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

function useMyArticles(
  type: "characters",
): UseQueryResult<ResponseCharacterArticleDto[], Error>;
function useMyArticles(
  type: "races",
): UseQueryResult<ResponseRaceArticleDto[], Error>;
function useMyArticles(
  type: "characters" | "races",
): UseQueryResult<
  ResponseCharacterArticleDto[] | ResponseRaceArticleDto[],
  Error
> {
  return useQuery({
    queryKey: ["myArticles", type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetMyAllCharacterArticles();
        return res.data;
      } else {
        const res = await raceArticleControllerGetMyAllRaceArticles();
        return res.data;
      }
    },
    staleTime: 60000, // данные считаются свежими в течение 1 минуты
  });
}

export { useMyArticles };
