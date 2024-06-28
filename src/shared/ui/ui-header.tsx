"use client";

import { ThemeButton } from "@/features/theme/ui/theme-button";
import { CircleUserRound, Plus } from "lucide-react";
import * as React from "react";
import { SearchGroup } from "@/features/search/ui/search-group";
import { IconButton } from "@chakra-ui/react";
import { AuthContext } from "../contexts/authContext";
import { CreateArticleForm } from "@/features/articles/ui/article-form";
import { AuthForm } from "@/features/auth/ui/auth-form";

export interface IHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UIHeader({ children }: IHeaderProps) {
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <header className="flex justify-between items-center">
      <h1 className="text-nowrap text-4xl font-bold">Лента новостей</h1>
      <div className="flex gap-6 items-center">
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
      </div>

      {children}
    </header>
  );
}
