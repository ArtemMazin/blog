import Article from "@/features/articles/ui/article";
import { UIMain } from "@/shared/ui/ui-main";
import * as React from "react";

export default function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  return (
    <UIMain>
      <Article id={params.article} type="races" />
    </UIMain>
  );
}
