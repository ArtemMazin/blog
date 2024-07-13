"use client";

import { ThemeButton } from "@/features/theme/ui/theme-button";
import { CircleUserRound } from "lucide-react";
import * as React from "react";
import { SearchGroup } from "@/features/search/ui/search-group";
import { Box, IconButton } from "@chakra-ui/react";
import { AuthContext } from "../contexts/authContext";
import { CreateArticleForm } from "@/features/articles/ui/article-form";
import { AuthForm } from "@/features/auth/ui/auth-form";
import { useProfile } from "@/features/auth/hooks/useProfile";
import { UILogo } from "./ui-logo";

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
            <CreateArticleForm />
            <IconButton
              isRound={true}
              aria-label="Switch to form"
              icon={<CircleUserRound size={"20px"} />}
            />
          </>
        ) : (
          <AuthForm />
        )}
      </Box>

      {children}
    </header>
  );
}
