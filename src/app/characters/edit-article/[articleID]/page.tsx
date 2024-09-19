import { characterArticleControllerGetOneCharacterArticle } from "@/shared/api/generated";
import EditArticleContent from "./edit-article-content";

export default async function EditArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  const articleData = await characterArticleControllerGetOneCharacterArticle(
    params.articleID,
  );

  return (
    <EditArticleContent
      initialArticleData={articleData.data}
      articleID={params.articleID}
    />
  );
}
