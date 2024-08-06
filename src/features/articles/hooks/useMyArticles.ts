import { characterArticlesApi } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export const useMyArticles = () => {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      characterArticlesApi
        .articlesControllerGetArticlesByAuthor()
        .then((res) => res.data),
  });
  return articles;
};
