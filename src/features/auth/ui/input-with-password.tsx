"use client";

import { useColors } from "@/shared/hooks/useColors";
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

    const { bgColor, textColor, borderColor, primaryColor } = useColors();

    return (
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder="Пароль"
          {...props}
          borderColor={borderColor}
          _hover={{ borderColor: primaryColor }}
          _focus={{
            borderColor: primaryColor,
            boxShadow: `0 0 0 1px ${primaryColor}`,
          }}
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
