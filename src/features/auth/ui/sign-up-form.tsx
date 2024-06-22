import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";
import { InputWithPassword } from "./input-with-password";

export interface ISignInFormProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children?: React.ReactNode;
}

export function SignUpForm(props: ISignInFormProps) {
  return (
    <form className="flex flex-col gap-8">
      <FormControl>
        <FormLabel>Почта</FormLabel>
        <Input type="email" placeholder="ivan@mail.ru" />
      </FormControl>

      <FormControl>
        <FormLabel>Имя пользователя</FormLabel>
        <Input type="text" placeholder="Иван Иванович" />
      </FormControl>

      <FormControl>
        <FormLabel>Пароль</FormLabel>
        <InputWithPassword />
      </FormControl>
    </form>
  );
}
