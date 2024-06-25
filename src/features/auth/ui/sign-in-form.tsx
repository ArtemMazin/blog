"use client";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { UIButton } from "@/shared/ui/ui-button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SignInDto, authControllerLogin } from "@/shared/api/generated";
import { REG_EXP_EMAIL, REG_EXP_PASSWORD, messages } from "../constants";

interface IFormInput {
  email: string;
  password: string;
}

export interface ISignInFormProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children?: React.ReactNode;
}

export function SignInForm(props: ISignInFormProps) {
  const toast = useToast();

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

  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: SignInDto) => authControllerLogin(credentials),

    onSuccess: (res) => {
      toast({
        title: "Вы успешно авторизовались",
        status: "success",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message || "Произошла ошибка при авторизации",
        status: "error",
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Почта</FormLabel>
        <Controller
          name="email"
          control={control}
          rules={{
            required: messages.ERROR_FORM_REQUIRED,
            pattern: {
              value: REG_EXP_EMAIL,
              message: messages.ERROR_INPUT_EMAIL,
            },
          }}
          render={({ field }) => (
            <Input type="email" placeholder="ivan@mail.ru" {...field} />
          )}
        />
        <div className="min-h-6">
          <FormErrorMessage fontSize={"small"} margin={0}>
            {errors.email?.message}
          </FormErrorMessage>
        </div>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormLabel>Пароль</FormLabel>
        <Controller
          name="password"
          control={control}
          rules={{
            required: messages.ERROR_FORM_REQUIRED,
            pattern: {
              value: REG_EXP_PASSWORD,
              message: messages.ERROR_INPUT_PASSWORD,
            },
          }}
          render={({ field }) => <InputWithPassword {...field} />}
        />
        <div className="min-h-16">
          <FormErrorMessage fontSize={"small"} margin={0}>
            {errors.password?.message}
          </FormErrorMessage>
        </div>
      </FormControl>

      <UIButton type="submit" isDisabled={!isValid} isLoading={isPending}>
        Войти
      </UIButton>
    </form>
  );
}
