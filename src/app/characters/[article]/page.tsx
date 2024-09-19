import CharacterArticle from "@/features/articles/ui/article/character-article";
import { UIMain } from "@/shared/ui/ui-main";
import * as React from "react";
import { characterArticleControllerGetOneCharacterArticle } from "@/shared/api/generated";

async function getCharacterArticle(id: string) {
  const res = await characterArticleControllerGetOneCharacterArticle(id);
  return res.data;
}

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const initialData = await getCharacterArticle(params.article);

  return (
    <UIMain>
      <CharacterArticle id={params.article} initialData={initialData} />
    </UIMain>
  );
}
