import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

export function Profile() {
  return (
    <Menu>
      <MenuButton as={Button} className="p-0 flex items-center shrink-0">
        Профиль
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem>Аккаунт</MenuItem>
          <MenuItem>Избранное</MenuItem>
          <Link href={"/my-articles"}>
            <MenuItem>Мои статьи</MenuItem>
          </Link>
          <MenuItem>Купить премиум</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
