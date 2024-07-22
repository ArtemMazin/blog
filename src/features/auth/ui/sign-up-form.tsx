"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { UIButton } from "@/shared/ui/ui-button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SignUpDto } from "@/shared/api/generated";
import { useRegistration } from "../hooks/useRegistration";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { validation } from "../constants";
import { Mail, Lock, User } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export function SignUpForm({ onClose }: { onClose: () => void }) {
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
      name: "",
    },
  });

  const { mutate: register, isPending } = useRegistration(reset);
  const { bgColor, textColor, borderColor, primaryColor } = useColors();

  const onSubmit: SubmitHandler<SignUpDto> = (userData) => {
    register(userData);
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
          Регистрация
        </Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel color={textColor}>Имя</FormLabel>
          <Flex align="center">
            <User size={20} color={textColor} style={{ marginRight: "10px" }} />
            <Controller
              name="name"
              control={control}
              rules={validation.name}
              render={({ field }) => (
                <Input
                  placeholder="Иван"
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
          <UIFormErrorMessage>{errors.name?.message}</UIFormErrorMessage>
        </FormControl>

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

        <Button
          type="submit"
          isDisabled={!isValid}
          isLoading={isPending}
          bg={primaryColor}
          color="white"
          _hover={{ opacity: 0.8 }}
        >
          Зарегистрироваться
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
