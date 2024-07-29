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
import { Payment } from "../payment/payment";
import { useProfile } from "./hooks/useProfile";

export function Profile() {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const user = useProfile();
  const router = useRouter();

  const logout = useLogout({ setIsAuthenticated, router });

  return (
    <Menu>
      <MenuButton as={Button} className="p-0 flex items-center shrink-0">
        Профиль
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <Link href={"/profile"}>
            <MenuItem>Аккаунт</MenuItem>
          </Link>
          <Link href={"/my-favorites"}>
            <MenuItem>Избранное</MenuItem>
          </Link>
          <Link href={"/my-articles"}>
            <MenuItem>Мои статьи</MenuItem>
          </Link>
          {!user.data?.isPremium && (
            <MenuItem>
              <Payment />
            </MenuItem>
          )}
          <MenuItem onClick={logout}>Выйти</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
