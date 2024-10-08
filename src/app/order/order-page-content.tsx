"use client";

import { usePaymentDetails } from "@/features/payment/hooks/usePaymentDetail";
import { UIMain } from "@/shared/ui/ui-main";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useColors } from "@/shared/hooks/useColors";

export default function OrderPageContent() {
  const { mutate: createPayment, data: paymentData } = usePaymentDetails();
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const router = useRouter();
  const { primaryColor, bgColor } = useColors();

  useEffect(() => {
    const id = sessionStorage.getItem("paymentId");
    id && createPayment({ id });
  }, [createPayment]);

  useEffect(() => {
    if (paymentData?.status === "succeeded") {
      setPaymentSucceeded(true);
    }
  }, [paymentData]);

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <UIMain>
      <Box
        bg={bgColor}
        borderRadius="lg"
        boxShadow="md"
        p={8}
        textAlign="center"
      >
        {paymentSucceeded ? (
          <VStack spacing={6}>
            <Heading as="h2" size="xl" color={primaryColor}>
              Поздравляем!
            </Heading>
            <Text fontSize="lg">
              Вы успешно приобрели премиум-подписку. Наслаждайтесь новыми
              возможностями!
            </Text>
            <Button colorScheme="blue" size="lg" onClick={handleReturnHome}>
              Вернуться на главную
            </Button>
          </VStack>
        ) : (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Обработка платежа...
            </Text>
            <Text>Пожалуйста, подождите</Text>
          </VStack>
        )}
      </Box>
    </UIMain>
  );
}
