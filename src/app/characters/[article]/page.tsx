import CharacterArticle from "@/features/articles/ui/article/character-article";
import { UIMain } from "@/shared/ui/ui-main";
import * as React from "react";

export default function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  return (
    <UIMain>
      <CharacterArticle id={params.article} />
    </UIMain>
  );
}
