"use client";

import * as React from "react";
import { articlesControllerGetAllArticles } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { useProfile } from "@/features/auth/hooks/useProfile";

export function ArticleList() {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });

  useProfile();

  return (
    <div>
      <ul>
        {articles?.map((article) => (
          <li key={article.title}>{article.content}</li>
        ))}
      </ul>
    </div>
  );
}
