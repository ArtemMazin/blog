import { authControllerResetPassword } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import * as React from "react";

export function usePasswordReset() {
  const toast = useToast();

  return useMutation({
    mutationFn: async (email: string) => authControllerResetPassword(email),

    onSuccess: (data) => {
      toast({
        title: "Письмо отправлено",
        description: "Проверьте почту",
        status: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при сбросе пароля",
        status: "error",
      });
    },
  });
}
