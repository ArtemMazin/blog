import { TabsWithForm } from "@/features/auth/ui/tabs-with-form";
import { UILogo } from "@/shared/ui/ui-logo";
import * as React from "react";

export interface ISidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UISidebar({ children }: ISidebarProps) {
  return (
    <aside className="p-12 flex flex-col">
      <UILogo className="mb-20" />
      <TabsWithForm />

      {children}
    </aside>
  );
}
