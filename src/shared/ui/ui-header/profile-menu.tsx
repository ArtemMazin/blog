import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { Payment } from "@/features/payment/payment";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { AuthContext } from "@/shared/contexts/authContext";
import { useContext } from "react";

export function ProfileMenu() {
  const { data: user } = useProfile();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { mutate: logout } = useLogout(setIsAuthenticated);

  const handleLogout = () => {
    logout();
  };

  return (
    <Menu>
      <MenuButton as={Button} className="p-0 flex items-center shrink-0">
        Профиль
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <Link href="/profile">
            <MenuItem>Аккаунт</MenuItem>
          </Link>
          <Link href="/my-favorites">
            <MenuItem>Избранное</MenuItem>
          </Link>
          <Link href="/my-articles">
            <MenuItem>Мои статьи</MenuItem>
          </Link>
          {!user?.isPremium && (
            <MenuItem>
              <Payment />
            </MenuItem>
          )}
          <MenuItem onClick={handleLogout}>Выйти</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
