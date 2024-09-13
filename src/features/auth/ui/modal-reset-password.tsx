import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { usePasswordReset } from "../hooks/usePasswordReset";
import { SubmitHandler, useForm } from "react-hook-form";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages, REG_EXP_EMAIL } from "../constants";
import { ResetPasswordDto } from "@/shared/api/generated";

export const ModalResetPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordDto>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const { mutate: resetPassword } = usePasswordReset();
  const onSubmit: SubmitHandler<ResetPasswordDto> = (email) => {
    resetPassword(email);
    onClose();
  };

  const submitHandler = handleSubmit(onSubmit);

  return (
    <Box className="my-4">
      <Box className="flex items-center gap-2 justify-end">
        <Text fontSize="sm" color="var(--light-textsecondary)">
          Забыли пароль?
        </Text>
        <Text
          fontSize="sm"
          fontWeight="medium"
          color="var(--primary)"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
          onClick={onOpen}
        >
          Восстановить
        </Text>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Введите email для сброса пароля</ModalHeader>
          <ModalCloseButton />

          <ModalBody className="flex gap-2 justify-end">
            <form onSubmit={submitHandler}>
              <FormControl>
                <Input
                  type="email"
                  placeholder="ivan@mail.ru"
                  {...register("email", {
                    required: messages.ERROR_FORM_REQUIRED,
                    pattern: {
                      value: REG_EXP_EMAIL,
                      message: messages.ERROR_INPUT_EMAIL,
                    },
                  })}
                  className="p-1"
                />
                <UIFormErrorMessage>
                  {errors.email?.message?.toString() || ""}
                </UIFormErrorMessage>
              </FormControl>
            </form>
            <Button colorScheme="red" onClick={submitHandler}>
              Сбросить
            </Button>
            <Button variant="outline" onClick={onClose}>
              Отмена
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
