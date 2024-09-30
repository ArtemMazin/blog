import { useQuery } from "@tanstack/react-query";
import { userCollectionControllerGetUserCollection } from "@/shared/api/generated";

export function useCollection() {
  return useQuery({
    queryKey: ["userCollection"],
    queryFn: async () => {
      const res = await userCollectionControllerGetUserCollection();
      return res.data;
    },
    staleTime: 60000, // данные считаются свежими в течение 1 минуты
  });
}
