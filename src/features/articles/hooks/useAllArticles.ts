import { articlesControllerGetAllArticles } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export const useAllArticles = () => {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });
  return articles;
};
