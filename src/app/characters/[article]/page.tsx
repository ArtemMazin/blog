import { notFound } from "next/navigation";
import CharacterArticle from "@/features/articles/ui/article/character-article";
import { UIMain } from "@/shared/ui/ui-main";
import * as React from "react";
import { characterArticleControllerGetAllCharacterArticles } from "@/shared/api/generated";
import { useInitialArticleByID } from "@/features/articles/hooks/useInitialArticleByID";

export async function generateStaticParams() {
  try {
    const { data: articles } =
      await characterArticleControllerGetAllCharacterArticles();
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
    const initialData = await useInitialArticleByID(
      "characters",
      params.article,
    );

    if (!initialData) {
      notFound();
    }

    return (
      <UIMain>
        <CharacterArticle id={params.article} initialData={initialData} />
      </UIMain>
    );
  } catch (error) {
    console.error("Ошибка при получении данных статьи:", error);
    notFound();
  }
}
