"use client";

import { ThemeButton } from "@/features/theme/ui/theme-button";
import * as React from "react";
import { SearchGroup } from "@/features/search/ui/search-group";
import { Box } from "@chakra-ui/react";
import { AuthContext } from "../contexts/authContext";
import { AuthForm } from "@/features/auth/ui/auth-form";
import { useProfile } from "@/features/auth/hooks/useProfile";
import { UILogo } from "./ui-logo";
import { Profile } from "@/features/profile/profile";
import { ModalCreatingArticle } from "@/features/articles/ui/modal-creating-article";

export interface IHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UIHeader({ children }: IHeaderProps) {
  const { isAuthenticated } = React.useContext(AuthContext);

  useProfile();

  return (
    <header className="mb-8 flex justify-between items-center">
      <UILogo />
      <Box className="flex gap-6 items-center">
        <ThemeButton />
        <SearchGroup />
        {isAuthenticated ? (
          <>
            <ModalCreatingArticle />
            <Profile />
          </>
        ) : (
          <AuthForm />
        )}
      </Box>

      {children}
    </header>
  );
}
