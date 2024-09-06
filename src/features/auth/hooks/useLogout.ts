import { authControllerLogoutUser } from "@/shared/api/generated";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import * as React from "react";

export const useLogout = (
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => authControllerLogoutUser(),

    onSuccess: () => {
      setIsAuthenticated(false);

      queryClient.setQueryData(["user"], null);

      router.push("/");
    },
    onError: (error) => {
      console.error("Ошибка при выходе из системы", error);
    },
  });
};
