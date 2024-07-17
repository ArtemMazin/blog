"use client";

import { ArticleList } from "@/features/articles/ui/article-list";
import { UIMain } from "@/shared/ui/ui-main";
import { useSearch } from "@/features/articles/hooks/useSearch";

export function FindedList() {
  const articles = useSearch();
  return <UIMain>{articles && <ArticleList articles={articles} />}</UIMain>;
}
