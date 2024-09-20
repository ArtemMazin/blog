import { notFound } from "next/navigation";
import { useInitialArticleByID } from "@/features/articles/hooks/useInitialArticleByID";
import RaceArticle from "@/features/articles/ui/article/race-article";
import {
  raceArticleControllerGetOneRaceArticle,
  raceArticleControllerGetAllRaceArticles,
} from "@/shared/api/generated";
import { UIMain } from "@/shared/ui/ui-main";
import * as React from "react";

export async function generateStaticParams() {
  try {
    const { data: articles } = await raceArticleControllerGetAllRaceArticles();
    return articles.map((article) => ({
      article: article._id,
    }));
  } catch (error) {
    console.error("Ошибка при генерации статических параметров:", error);
    return [];
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  try {
    const initialData = await useInitialArticleByID("races", params.article);

    if (!initialData) {
      notFound();
    }

    return (
      <UIMain>
        <RaceArticle id={params.article} initialData={initialData} />
      </UIMain>
    );
  } catch (error) {
    console.error("Ошибка при получении данных статьи:", error);
    notFound();
  }
}
