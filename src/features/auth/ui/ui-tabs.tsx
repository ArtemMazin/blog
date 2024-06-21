import * as React from "react";

export interface ITabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function Tabs(props: ITabsProps) {
  return <div></div>;
}
