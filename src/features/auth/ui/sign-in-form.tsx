import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";
import { UIButton } from "@/shared/ui/ui-button";

export interface ISignInFormProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children?: React.ReactNode;
}

export function SignInForm(props: ISignInFormProps) {
  return (
    <form className="flex flex-col gap-8">
      <FormControl>
        <FormLabel>Почта</FormLabel>
        <Input type="email" placeholder="ivan@mail.ru" />
      </FormControl>

      <FormControl>
        <FormLabel>Пароль</FormLabel>
        <InputWithPassword />
      </FormControl>

      <UIButton className="mt-5">Войти</UIButton>
    </form>
  );
}
