"use client";

import { ThemeButton } from "@/features/theme/ui/theme-button";
import { CircleUserRound, Plus } from "lucide-react";
import * as React from "react";
import { UIButton } from "./ui-button";
import { SearchGroup } from "@/features/search/ui/search-group";
import { IconButton } from "@chakra-ui/react";
import { AuthContext } from "../contexts/authContext";

export interface IHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UIHeader({ children }: IHeaderProps) {
  const { isAuthenticated, setIsOpenForm, isOpenForm } =
    React.useContext(AuthContext);

  return (
    <header className="flex justify-between items-center">
      <h1 className="text-nowrap text-4xl font-bold">Лента новостей</h1>
      <div className="flex gap-6 items-center">
        <ThemeButton />
        <SearchGroup />
        {isAuthenticated ? (
          <>
            <UIButton>
              Добавить новость <Plus size={"20px"} />
            </UIButton>
            <IconButton
              isRound={true}
              aria-label="Switch to form"
              icon={<CircleUserRound size={"20px"} />}
            />
          </>
        ) : (
          <UIButton
            onClick={() => {
              setIsOpenForm(!isOpenForm);
            }}
          >
            Войти
          </UIButton>
        )}
      </div>

      {children}
    </header>
  );
}
