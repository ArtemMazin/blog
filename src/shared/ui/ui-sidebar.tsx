import { Logo } from "@/shared/ui/ui-logo";
import * as React from "react";

export interface ISidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function Sidebar({ children }: ISidebarProps) {
  return (
    <div>
      <Logo />
      {children}
    </div>
  );
}
