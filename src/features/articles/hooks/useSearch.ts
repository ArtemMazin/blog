import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import {
  characterArticleControllerSearchCharacterArticles,
  raceArticleControllerSearchRaceArticles,
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

function useSearch(
  type: "characters",
): UseQueryResult<ResponseCharacterArticleDto[] | undefined, Error>;
function useSearch(
  type: "races",
): UseQueryResult<ResponseRaceArticleDto[] | undefined, Error>;
function useSearch(
  type: "characters" | "races",
): UseQueryResult<
  ResponseCharacterArticleDto[] | ResponseRaceArticleDto[] | undefined,
  Error
> {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");

  return useQuery({
    queryKey: ["search", search, type],
    queryFn: async () => {
      if (!search) return undefined;

      if (type === "characters") {
        const res = await characterArticleControllerSearchCharacterArticles({
          query: search,
        });
        return res.data;
      } else {
        const res = await raceArticleControllerSearchRaceArticles({
          query: search,
        });
        return res.data;
      }
    },
  });
}

export { useSearch };
