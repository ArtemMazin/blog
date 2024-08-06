import { characterArticlesApi } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useSearch = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");
  const { data: articles } = useQuery({
    queryKey: ["search", search],
    queryFn: () =>
      characterArticlesApi
        .articlesControllerSearchArticles({ query: search || "" })
        .then((res) => res.data),
  });
  return articles;
};
