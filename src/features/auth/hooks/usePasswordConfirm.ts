import { authControllerUpdatePassword } from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

export const usePasswordConfirm = () => {
  const toast = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  return useMutation({
    mutationFn: (newPassword: string) =>
      authControllerUpdatePassword(
        { token: token ?? "", newPassword },
        {
          withCredentials: true,
        },
      ),

    onSuccess: (res) => {
      toast({
        title: "Пароль изменен",
        status: "success",
      });
      router.push("/");
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка при изменении пароля",
        status: "error",
      });
    },
  });
};
