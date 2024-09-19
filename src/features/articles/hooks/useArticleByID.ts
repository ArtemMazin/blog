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
  initialData?: ResponseCharacterArticleDto,
): UseQueryResult<ResponseCharacterArticleDto, Error>;
function useArticleByID(
  type: "races",
  id: string,
  initialData?: ResponseRaceArticleDto,
): UseQueryResult<ResponseRaceArticleDto, Error>;
function useArticleByID(
  type: "characters" | "races",
  id: string,
  initialData?: ResponseCharacterArticleDto | ResponseRaceArticleDto,
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
    initialData: initialData,
  });
}

export { useArticleByID };
