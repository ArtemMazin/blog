import {
  characterArticleControllerGetOneCharacterArticle,
  raceArticleControllerGetOneRaceArticle,
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

function useInitialArticleByID(
  type: "characters",
  id: string,
): Promise<ResponseCharacterArticleDto>;
function useInitialArticleByID(
  type: "races",
  id: string,
): Promise<ResponseRaceArticleDto>;
function useInitialArticleByID(
  type: "characters" | "races",
  id: string,
): Promise<ResponseCharacterArticleDto | ResponseRaceArticleDto> {
  if (type === "characters") {
    return characterArticleControllerGetOneCharacterArticle(id).then(
      (res) => res.data,
    );
  } else {
    return raceArticleControllerGetOneRaceArticle(id).then((res) => res.data);
  }
}

export { useInitialArticleByID };
