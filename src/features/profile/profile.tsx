import { authControllerLogout } from "@/shared/api/generated";
import { AuthContext } from "@/shared/contexts/authContext";
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useLogout } from "../auth/hooks/useLogout";

export function Profile() {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const router = useRouter();

  const logout = useLogout({ setIsAuthenticated, router });

  return (
    <Menu>
      <MenuButton as={Button} className="p-0 flex items-center shrink-0">
        Профиль
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem>Аккаунт</MenuItem>
          <Link href={"/my-favorites"}>
            <MenuItem>Избранное</MenuItem>
          </Link>
          <Link href={"/my-articles"}>
            <MenuItem>Мои статьи</MenuItem>
          </Link>
          <MenuItem>Купить премиум</MenuItem>
          <MenuItem onClick={logout}>Выйти</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
