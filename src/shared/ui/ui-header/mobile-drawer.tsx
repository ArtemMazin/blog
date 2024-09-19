import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { UILogo } from "../ui-logo";
import { ThemeButton } from "@/features/theme/ui/theme-button";
import { AuthForm } from "@/features/auth/ui/auth-form";
import { UINavItems } from "../ui-nav-items";
import { MenuCreateArticle } from "../ui-menu-create-article";
import { useColors } from "@/shared/hooks/useColors";
import { ProfileMenu } from "./profile-menu";
import { AuthContext } from "@/shared/contexts/authContext";
import { useContext } from "react";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { bgColor } = useColors();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent bg={bgColor}>
        <Box py={2}>
          <UILogo />
        </Box>
        <DrawerCloseButton top={4} right={6} />
        <DrawerBody>
          <VStack spacing={6} align="stretch" mt={6}>
            <ThemeButton />
            <Button
              leftIcon={<Search />}
              justifyContent="flex-start"
              variant="ghost"
              onClick={onClose}
            >
              Поиск
            </Button>
            {isAuthenticated ? (
              <>
                <MenuCreateArticle />
                <ProfileMenu />
              </>
            ) : (
              <AuthForm />
            )}
            <UINavItems />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
