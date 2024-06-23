import * as React from "react";
import { Button } from "@chakra-ui/react";
import clsx from "clsx";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export function UIButton({ children, className, ...props }: IButtonProps) {
  return (
    <Button
      className={clsx("flex-none gap-1 items-center", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
