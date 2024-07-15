import { articlesControllerGetArticlesByAuthor } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export const useMyArticles = () => {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      articlesControllerGetArticlesByAuthor({
        withCredentials: true,
      }).then((res) => res.data),
  });
  return articles;
};
