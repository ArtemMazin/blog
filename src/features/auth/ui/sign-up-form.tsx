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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  AuthControllerSignUpResult,
  SignUpDto,
  authControllerSignUp,
} from "@/shared/api/generated";
import {
  REG_EXP_EMAIL,
  REG_EXP_NAME,
  REG_EXP_PASSWORD,
  messages,
} from "../constants";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface IFormInput {
  email: string;
  name: string;
  password: string;
}

export interface ISignInFormProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children?: React.ReactNode;
}

export function SignUpForm(props: ISignInFormProps) {
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
      name: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (newUser: SignUpDto) => authControllerSignUp(newUser),

    onSuccess: (res: AuthControllerSignUpResult) => {
      toast({
        title: "Вы успешно зарегистрировались",
        status: "success",
      });
      reset();
    },
    onError: (error: AxiosError<{ type: string }>) => {
      toast({
        title: "Ошибка",
        description:
          error.response?.data?.type || "Произошла ошибка при регистрации",
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

      <FormControl isInvalid={!!errors.name}>
        <FormLabel>Имя пользователя</FormLabel>
        <Controller
          name="name"
          control={control}
          rules={{
            required: messages.ERROR_FORM_REQUIRED,
            pattern: {
              value: REG_EXP_NAME,
              message: messages.ERROR_INPUT_NAME,
            },
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Иван Иванович" {...field} />
          )}
        />
        <div className="min-h-6">
          <FormErrorMessage fontSize={"small"} margin={0}>
            {errors.name?.message}
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
        Зарегистрироваться
      </UIButton>
    </form>
  );
}
