"use client";

import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { UIButton } from "@/shared/ui/ui-button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { validation } from "../constants";
import { useRegistration } from "../hooks/useRegistration";
import { SignUpDto } from "@/shared/api/generated";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";

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
      name: "",
      password: "",
    },
  });

  const { mutate: registration, isPending } = useRegistration(reset);

  const onSubmit: SubmitHandler<SignUpDto> = (userData) => {
    registration(userData);
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

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Имя пользователя</FormLabel>
          <Controller
            name="name"
            control={control}
            rules={validation.name}
            render={({ field }) => (
              <Input type="text" placeholder="Иван Иванович" {...field} />
            )}
          />
          <UIFormErrorMessage>{errors.name?.message}</UIFormErrorMessage>
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
        <Button variant="outline" onClick={onClose}>
          Отмена
        </Button>
        <UIButton type="submit" isDisabled={!isValid} isLoading={isPending}>
          Зарегистрироваться
        </UIButton>
      </Stack>
    </form>
  );
}
