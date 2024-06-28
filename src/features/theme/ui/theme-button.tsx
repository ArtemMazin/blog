"use client";

import * as React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonStar, Sun } from "lucide-react";

export interface IThemeButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function ThemeButton(props: IThemeButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      isRound={true}
      aria-label="Switch to light mode"
      icon={
        colorMode === "light" ? <MoonStar size="20px" /> : <Sun size="20px" />
      }
      onClick={toggleColorMode}
    />
  );
}
