"use client";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";

export function InputWithPassword() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <Input type={show ? "text" : "password"} placeholder="Пароль" />
      <InputRightElement>
        {show ? (
          <EyeOff size={"20px"} onClick={handleClick} />
        ) : (
          <Eye size={"20px"} onClick={handleClick} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
