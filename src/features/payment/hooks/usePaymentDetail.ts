import {
  GetPaymentDto,
  paymentControllerGetPayment,
  ResponsePaymentDto,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePaymentDetails = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation<ResponsePaymentDto, Error, GetPaymentDto>({
    mutationFn: (id: GetPaymentDto) =>
      paymentControllerGetPayment(id).then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      sessionStorage.removeItem("paymentId");
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
