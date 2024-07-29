import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePayment } from "./hooks/usePayment";
import { useColors } from "@/shared/hooks/useColors";

export function Payment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colors = useColors();

  const { reset, handleSubmit } = useForm<{ amount: number }>({
    mode: "onBlur",
    defaultValues: {
      amount: 500,
    },
  });

  const { mutate: createPayment, isPending } = usePayment(reset, onClose);

  const onSubmit: SubmitHandler<{ amount: number }> = ({ amount }) => {
    createPayment({ amount });
  };

  return (
    <>
      <Box onClick={onOpen}>Купить премиум</Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Купить премиум</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              bg={colors.bgColor}
              borderRadius="lg"
              p={6}
              boxShadow="md"
            >
              <VStack spacing={4} align="stretch">
                <Text fontSize="lg" fontWeight="bold">
                  Подтверждение покупки
                </Text>
                <Text>
                  Вы собираетесь приобрести премиум-подписку за{" "}
                  <strong>500 рублей</strong>. Нажмите кнопку «Оплатить» для
                  подтверждения.
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color={colors.primaryColor}
                >
                  Цена: 500 руб
                </Text>
                <Button
                  type="submit"
                  disabled={isPending}
                  colorScheme="blue"
                  size="md"
                  width="100%"
                >
                  {isPending ? "Обработка..." : "Оплатить"}
                </Button>
              </VStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
