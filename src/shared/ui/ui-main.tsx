import * as React from "react";

export interface IMainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return <main>{children}</main>;
}
