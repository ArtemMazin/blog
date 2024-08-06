import { characterArticlesApi } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export const useAllArticles = () => {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      characterArticlesApi
        .articlesControllerGetAllArticles()
        .then((res) => res.data),
  });
  return articles;
};
