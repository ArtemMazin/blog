import EditArticleContent from "./edit-article-content";

export default async function EditArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  return <EditArticleContent articleID={params.articleID} />;
}
