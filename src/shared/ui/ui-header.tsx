"use client";

import { ThemeButton } from "@/features/theme/ui/theme-button";
import { SearchGroup } from "@/features/search/ui/search-group";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AuthContext } from "../contexts/authContext";
import { AuthForm } from "@/features/auth/ui/auth-form";
import { UILogo } from "./ui-logo";
import { Profile } from "@/features/profile/profile";
import { ModalCreatingArticle } from "@/features/articles/ui/modal-creating-article";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { Suspense, useContext } from "react";
import { Menu } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export function UIHeader() {
  const { isAuthenticated } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bgColor, textColor, primaryColor, secondaryColor } = useColors();
  useProfile();

  return (
    <Box as="header" color={textColor} py={4} mb={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <UILogo />

        <Flex
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          gap={6}
        >
          <ThemeButton />
          <Suspense fallback={<Box>Загрузка...</Box>}>
            <SearchGroup />
          </Suspense>
          {isAuthenticated ? (
            <>
              <ModalCreatingArticle />
              <Profile />
            </>
          ) : (
            <AuthForm />
          )}
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<Menu />}
          aria-label="Открыть меню"
          bg={primaryColor}
          color={bgColor}
          _hover={{ bg: secondaryColor }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor} color={textColor}>
          <DrawerCloseButton />
          <DrawerBody mt={10}>
            <Flex flexDirection="column" gap={6}>
              <ThemeButton />
              <Suspense fallback={<Box>Загрузка...</Box>}>
                <SearchGroup />
              </Suspense>
              {isAuthenticated ? (
                <>
                  <ModalCreatingArticle />
                  <Profile />
                </>
              ) : (
                <AuthForm />
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
