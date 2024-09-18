import { UIMain } from "@/shared/ui/ui-main";
import { RaceArticleList } from "@/features/articles/ui/article-list/race-list";
import { raceArticleControllerGetAllRaceArticles } from "@/shared/api/generated";

async function getRaceArticles() {
  const response = await raceArticleControllerGetAllRaceArticles();
  return response.data;
}

export default async function RacesPage() {
  const raceArticles = await getRaceArticles();

  return (
    <UIMain>
      <RaceArticleList articles={raceArticles} />
    </UIMain>
  );
}
