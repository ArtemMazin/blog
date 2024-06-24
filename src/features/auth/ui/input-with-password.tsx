"use client";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { forwardRef } from "react";

export interface IInputWithPasswordProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const InputWithPassword = forwardRef(
  ({ children, ...props }: IInputWithPasswordProps, ref) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder="Пароль"
          {...props}
        />
        <InputRightElement>
          {show ? (
            <EyeOff size={"20px"} onClick={handleClick} />
          ) : (
            <Eye size={"20px"} onClick={handleClick} />
          )}
        </InputRightElement>
      </InputGroup>
    );
  },
);
