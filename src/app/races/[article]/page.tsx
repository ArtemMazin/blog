import RaceArticle from "@/features/articles/ui/article/race-article";
import { UIMain } from "@/shared/ui/ui-main";
import * as React from "react";

export default function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  return (
    <UIMain>
      <RaceArticle id={params.article} />
    </UIMain>
  );
}
