import * as React from "react";

export interface IMainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export function UIMain({ children }: IMainProps) {
  return <main>{children}</main>;
}
