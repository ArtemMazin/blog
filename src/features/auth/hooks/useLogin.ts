import {
  LoginDto,
  authControllerAuthenticateUser,
  AuthControllerAuthenticateUserResult,
} from "@/shared/api/generated";
import { AuthContext } from "@/shared/contexts/authContext";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

export const useLogin = (reset: () => void) => {
  const toast = useToast();

  const authContext = React.useContext(AuthContext);
  const { setIsAuthenticated } = authContext;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: LoginDto) =>
      authControllerAuthenticateUser(userData),

    onSuccess: (res: AuthControllerAuthenticateUserResult) => {
      toast({
        title: "Вы успешно авторизовались",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setIsAuthenticated(true);
      reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при авторизации",
        status: "error",
      });
      setIsAuthenticated(false);
    },
  });
};
