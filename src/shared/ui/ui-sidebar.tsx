"use client";

import { TabsWithForm } from "@/features/auth/ui/tabs-with-form";
import { UILogo } from "@/shared/ui/ui-logo";
import * as React from "react";
import { AuthContext } from "../contexts/authContext";
import { Collapse, useDisclosure } from "@chakra-ui/react";

export interface ISidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UISidebar({ children }: ISidebarProps) {
  const { isAuthenticated } = React.useContext(AuthContext);
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: isAuthenticated,
  });

  React.useEffect(() => {
    onToggle();
  }, [isAuthenticated]);

  return (
    <Collapse in={isOpen} animateOpacity>
      <aside className="p-12 w-480 flex flex-col items-center ">
        <UILogo className="mb-20" />
        <TabsWithForm />

        {children}
      </aside>
    </Collapse>
  );
}
