import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import * as React from "react";

export function MenuCreateArticle() {
  return (
    <Menu>
      <MenuButton as={Button} className="p-0 flex items-center shrink-0">
        Создать статью
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <Link href={"/characters/create-article"}>
            <MenuItem>Персонажи</MenuItem>
          </Link>
          <Link href={"/races/create-article"}>
            <MenuItem>Расы</MenuItem>
          </Link>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
