import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  characterArticleControllerGetOneCharacterArticle,
  raceArticleControllerGetOneRaceArticle,
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

function useArticleByID(
  type: "characters",
  id: string,
): UseQueryResult<ResponseCharacterArticleDto, Error>;
function useArticleByID(
  type: "races",
  id: string,
): UseQueryResult<ResponseRaceArticleDto, Error>;
function useArticleByID(
  type: "characters" | "races",
  id: string,
): UseQueryResult<ResponseCharacterArticleDto | ResponseRaceArticleDto, Error> {
  return useQuery({
    queryKey: ["article", id, type],
    queryFn: async () => {
      if (type === "characters") {
        const res = await characterArticleControllerGetOneCharacterArticle(id);
        return res.data;
      } else {
        const res = await raceArticleControllerGetOneRaceArticle(id);
        return res.data;
      }
    },
  });
}

export { useArticleByID };
