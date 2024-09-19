"use client";

import { Flex } from "@chakra-ui/react";
import { MenuCreateArticle } from "../ui-menu-create-article";
import { ProfileMenu } from "./profile-menu";

export function UserMenu() {
  return (
    <Flex alignItems="center" gap={4}>
      <MenuCreateArticle />
      <ProfileMenu />
    </Flex>
  );
}
