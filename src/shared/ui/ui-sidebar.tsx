"use client";

import { TabsWithForm } from "@/features/auth/ui/tabs-with-form";
import { UILogo } from "@/shared/ui/ui-logo";
import * as React from "react";
import { AuthContext } from "../contexts/authContext";
import { Slide } from "@chakra-ui/react";
import { CreateArticleForm } from "@/features/articles/ui/create-article-form";
import { SidebarContext } from "../contexts/sidebarContext";

export interface ISidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UISidebar({ children }: ISidebarProps) {
  const { isAuthenticated } = React.useContext(AuthContext);
  const { isOpen, setIsOpen } = React.useContext(SidebarContext);

  React.useEffect(() => {
    isAuthenticated && setIsOpen(false);
  }, [isAuthenticated, setIsOpen]);

  return (
    <Slide direction="left" in={isOpen} className="max-w-fit z-10">
      <aside className="p-12 h-full w-440 flex flex-col items-center">
        <UILogo className="mb-20" />
        {isAuthenticated ? <CreateArticleForm /> : <TabsWithForm />}

        {children}
      </aside>
    </Slide>
  );
}
