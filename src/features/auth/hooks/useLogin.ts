import { SignInDto, authControllerLogin } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

export const useLogin = (reset: () => void) => {
  const toast = useToast();

  return useMutation({
    mutationFn: (userData: SignInDto) => authControllerLogin(userData),

    onSuccess: (res) => {
      toast({
        title: "Вы успешно авторизовались",
        status: "success",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message || "Произошла ошибка при авторизации",
        status: "error",
      });
    },
  });
};
