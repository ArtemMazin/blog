import * as React from "react";
import { Button } from "@chakra-ui/react";
import clsx from "clsx";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export function UIButton({
  children,
  className,
  isDisabled,
  isLoading,
  ...props
}: IButtonProps) {
  return (
    <Button
      className={clsx("flex-none gap-1 items-center", className)}
      isDisabled={isDisabled}
      isLoading={isLoading}
      zIndex={10}
      {...props}
    >
      {children}
    </Button>
  );
}
