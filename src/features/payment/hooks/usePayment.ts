import {
  IPaymentDetails,
  paymentControllerCreatePayment,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePayment = (reset?: () => void, onClose?: () => void) => {
  const toast = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (amount: { amount: number }) =>
      paymentControllerCreatePayment(amount),
    onSuccess: (res: { data: IPaymentDetails }) => {
      router.push(res.data.confirmation.confirmation_url);
      sessionStorage.setItem("paymentId", res.data.id);

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
