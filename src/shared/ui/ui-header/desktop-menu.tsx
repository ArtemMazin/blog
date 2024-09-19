"use client";

import { Flex } from "@chakra-ui/react";
import { ThemeButton } from "@/features/theme/ui/theme-button";
import { SearchGroup } from "@/features/search/ui/search-group";
import { AuthForm } from "@/features/auth/ui/auth-form";
import { AuthContext } from "@/shared/contexts/authContext";
import { Suspense, useContext } from "react";
import { UserMenu } from "./user-menu";

export function DesktopMenu() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Flex display={{ base: "none", md: "flex" }} alignItems="center" gap={4}>
      <ThemeButton />
      <Suspense>
        <SearchGroup />
      </Suspense>
      {isAuthenticated ? <UserMenu /> : <AuthForm />}
    </Flex>
  );
}
