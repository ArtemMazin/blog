"use client";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { UIButton } from "@/shared/ui/ui-button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { authControllerSignUp } from "@/shared/api/generated";
import {
  REG_EXP_EMAIL,
  REG_EXP_NAME,
  REG_EXP_PASSWORD,
  messages,
} from "../constants";

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
  const {
    control,
    reset,
    formState: { errors },

    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      authControllerSignUp(data)
        .then((res) => {
          console.log(res);
          reset();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
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
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
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
            minLength: {
              value: 6,
              message: messages.ERROR_INPUT_PASSWORD_MIN_LENGTH,
            },
          }}
          render={({ field }) => <InputWithPassword {...field} />}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <UIButton className="mt-5" type="submit">
        Зарегистрироваться
      </UIButton>
    </form>
  );
}
