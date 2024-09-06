"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginDto } from "@/shared/api/generated";
import { useLogin } from "../hooks/useLogin";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { validation } from "../constants";
import { ModalResetPassword } from "./modal-reset-password";
import { Mail, Lock } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export function SignInForm({ onClose }: { onClose: () => void }) {
  const {
    control,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useLogin(reset);
  const { bgColor, textColor, borderColor, primaryColor } = useColors();

  const onSubmit: SubmitHandler<LoginDto> = (userData) => {
    login(userData);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      bg={bgColor}
      p={8}
      borderRadius="lg"
      boxShadow="xl"
      maxWidth="400px"
      width="100%"
    >
      <VStack spacing={6} align="stretch">
        <Heading as="h2" size="xl" textAlign="center" color={textColor}>
          Вход
        </Heading>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel color={textColor}>Почта</FormLabel>
          <Flex align="center">
            <Mail size={20} color={textColor} style={{ marginRight: "10px" }} />
            <Controller
              name="email"
              control={control}
              rules={validation.email}
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="ivan@mail.ru"
                  {...field}
                  borderColor={borderColor}
                  _hover={{ borderColor: primaryColor }}
                  _focus={{
                    borderColor: primaryColor,
                    boxShadow: `0 0 0 1px ${primaryColor}`,
                  }}
                />
              )}
            />
          </Flex>
          <UIFormErrorMessage>{errors.email?.message}</UIFormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel color={textColor}>Пароль</FormLabel>
          <Flex align="center">
            <Lock size={20} color={textColor} style={{ marginRight: "10px" }} />
            <Controller
              name="password"
              control={control}
              rules={validation.password}
              render={({ field }) => <InputWithPassword {...field} />}
            />
          </Flex>
          <UIFormErrorMessage>{errors.password?.message}</UIFormErrorMessage>
        </FormControl>

        <ModalResetPassword />

        <Button
          type="submit"
          isDisabled={!isValid}
          isLoading={isPending}
          bg={primaryColor}
          color="white"
          _hover={{ opacity: 0.8 }}
        >
          Войти
        </Button>

        <Button
          variant="outline"
          onClick={onClose}
          borderColor={borderColor}
          color={textColor}
        >
          Отмена
        </Button>
      </VStack>
    </Box>
  );
}
