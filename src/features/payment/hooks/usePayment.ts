import {
  IPaymentDetails,
  paymentControllerCreatePayment,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePayment = (reset?: () => void, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (amount: { amount: number }) =>
      paymentControllerCreatePayment(amount, {
        withCredentials: true,
      }),
    onSuccess: (res: { data: IPaymentDetails }) => {
      router.push(res.data.confirmation.confirmation_url);

      queryClient.invalidateQueries({ queryKey: ["user"] });
      onClose && onClose();
      reset && reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error?.message || "Произошла ошибка",
        status: "error",
      });
    },
  });
};
