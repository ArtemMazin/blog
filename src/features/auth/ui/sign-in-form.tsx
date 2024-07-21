"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { UIButton } from "@/shared/ui/ui-button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SignInDto } from "@/shared/api/generated";
import { useLogin } from "../hooks/useLogin";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { validation } from "../constants";
import { ModalResetPassword } from "./modal-reset-password";

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

  const onSubmit: SubmitHandler<SignInDto> = (userData) => {
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="10px">
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Почта</FormLabel>
          <Controller
            name="email"
            control={control}
            rules={validation.email}
            render={({ field }) => (
              <Input type="email" placeholder="ivan@mail.ru" {...field} />
            )}
          />
          <UIFormErrorMessage>{errors.email?.message}</UIFormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Пароль</FormLabel>
          <Controller
            name="password"
            control={control}
            rules={validation.password}
            render={({ field }) => <InputWithPassword {...field} />}
          />
          <UIFormErrorMessage>{errors.password?.message}</UIFormErrorMessage>
        </FormControl>
        <ModalResetPassword />
        <Button variant="outline" onClick={onClose}>
          Отмена
        </Button>
        <UIButton type="submit" isDisabled={!isValid} isLoading={isPending}>
          Войти
        </UIButton>
      </Stack>
    </form>
  );
}
