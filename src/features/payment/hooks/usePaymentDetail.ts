import {
  IPaymentDetails,
  paymentControllerGetPaymentDetails,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePaymentDetails = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (id: { id: string }) => paymentControllerGetPaymentDetails(id),
    onSuccess: (res: { data: IPaymentDetails }) => {
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
