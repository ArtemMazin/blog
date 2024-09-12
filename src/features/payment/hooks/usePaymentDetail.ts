import {
  GetPaymentDto,
  paymentControllerGetPayment,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePaymentDetails = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (id: GetPaymentDto) => paymentControllerGetPayment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      sessionStorage.clear();
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
