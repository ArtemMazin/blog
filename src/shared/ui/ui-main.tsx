import * as React from "react";

export interface IMainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

export function UIMain({ children, className }: IMainProps) {
  return <main className={className}>{children}</main>;
}
