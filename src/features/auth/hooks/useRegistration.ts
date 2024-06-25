import {
  AuthControllerSignUpResult,
  SignUpDto,
  authControllerSignUp,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useRegistration = (reset: () => void) => {
  const toast = useToast();

  return useMutation({
    mutationFn: (newUserData: SignUpDto) => authControllerSignUp(newUserData),

    onSuccess: (res: AuthControllerSignUpResult) => {
      toast({
        title: "Вы успешно зарегистрировались",
        status: "success",
      });
      reset();
    },
    onError: (error: AxiosError<{ type: string }>) => {
      toast({
        title: "Ошибка",
        description:
          error.response?.data?.type || "Произошла ошибка при регистрации",
        status: "error",
      });
    },
  });
};
