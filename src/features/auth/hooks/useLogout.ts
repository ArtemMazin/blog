import { authControllerLogout } from "@/shared/api/generated";
import { useRouter } from "next/navigation";
import * as React from "react";

export const useLogout = ({
  setIsAuthenticated,
  router,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  router: ReturnType<typeof useRouter>;
}) => {
  return async () => {
    try {
      await authControllerLogout({
        withCredentials: true,
      });
      setIsAuthenticated(false);
      router.push("/");
    } catch (error) {
      console.error("Ошибка при выходе из системы", error);
    }
  };
};
