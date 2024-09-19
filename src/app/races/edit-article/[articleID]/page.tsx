import { raceArticleControllerGetOneRaceArticle } from "@/shared/api/generated";
import EditArticleContent from "./edit-article-content";

export default async function EditArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  const articleData = await raceArticleControllerGetOneRaceArticle(
    params.articleID,
  );

  return (
    <EditArticleContent
      initialArticleData={articleData.data}
      articleID={params.articleID}
    />
  );
}
