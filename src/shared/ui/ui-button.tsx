import * as React from "react";
import { Button } from "@chakra-ui/react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export function UIButton({ children }: IButtonProps) {
  return <Button className="flex-none gap-1 items-center">{children}</Button>;
}
