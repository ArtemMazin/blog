import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userCollectionControllerRollCharacter } from "@/shared/api/generated";

export function useRollCharacter() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await userCollectionControllerRollCharacter();
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userCollection"] });
    },
  });
}
