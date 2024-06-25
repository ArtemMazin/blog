import { FormErrorMessage } from "@chakra-ui/react";
import * as React from "react";

export interface IUIFormErrorMessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UIFormErrorMessage({ children }: IUIFormErrorMessageProps) {
  return (
    <div className="min-h-6">
      <FormErrorMessage fontSize={"small"} margin={0}>
        {children}
      </FormErrorMessage>
    </div>
  );
}
