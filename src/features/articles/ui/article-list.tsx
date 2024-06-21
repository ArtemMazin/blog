"use client";

import * as React from "react";
import { articlesControllerGetAllArticles } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { Button, useColorMode } from "@chakra-ui/react";

export function ArticleList() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });

  return (
    <div>
      <ul>
        {articles?.map((article) => (
          <li key={article.title}>{article.content}</li>
        ))}
      </ul>
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
}
