import {
  AuthControllerSignUpResult,
  SignUpDto,
  authControllerSignUp,
} from "@/shared/api/generated";
import { AuthContext } from "@/shared/contexts/authContext";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";

export const useRegistration = (reset: () => void) => {
  const toast = useToast();

  const authContext = React.useContext(AuthContext);
  const { setIsAuthenticated } = authContext;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUserData: SignUpDto) => authControllerSignUp(newUserData),

    onSuccess: (res: AuthControllerSignUpResult) => {
      toast({
        title: "Вы успешно зарегистрировались",
        status: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setIsAuthenticated(true);
      reset();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast({
        title: "Ошибка",
        description:
          error?.response?.data?.message || "Произошла ошибка при регистрации",
        status: "error",
      });
      setIsAuthenticated(false);
    },
  });
};
