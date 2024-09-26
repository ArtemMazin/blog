export const revalidate = 300;

import { notFound } from "next/navigation";
import EditArticleContent from "./edit-article-content";
import { useInitialArticleByID } from "@/features/articles/hooks/useInitialArticleByID";

export default async function EditArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  try {
    const initialData = await useInitialArticleByID("races", params.articleID);

    if (!initialData) {
      console.error("Статья не найдена");
      notFound();
    }

    return (
      <EditArticleContent
        initialArticleData={initialData}
        articleID={params.articleID}
      />
    );
  } catch (error) {
    console.error(
      "Ошибка при получении данных статьи для редактирования:",
      error,
    );
    notFound();
  }
}
