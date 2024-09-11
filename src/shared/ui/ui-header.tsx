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
  VStack,
  Button,
} from "@chakra-ui/react";
import { AuthContext } from "../contexts/authContext";
import { AuthForm } from "@/features/auth/ui/auth-form";
import { UILogo } from "./ui-logo";
import { Profile } from "@/features/profile/profile";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { Suspense, useContext } from "react";
import { Search, Menu as MenuIcon } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { UINavItems } from "./ui-nav-items";
import { MenuCreateArticle } from "./ui-menu-create-article";

export function UIHeader() {
  const { isAuthenticated } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bgColor, textColor, primaryColor, secondaryColor, borderColor } =
    useColors();
  useProfile();

  return (
    <Box
      as="header"
      color={textColor}
      py={1}
      mb={2}
      borderWidth={1}
      borderColor={borderColor}
      boxShadow="md"
      bg={bgColor}
    >
      <Flex
        mx="auto"
        maxW="8xl"
        px={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <UILogo />

        <Flex
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          gap={4}
        >
          <ThemeButton />
          <Suspense fallback={<Box>Загрузка...</Box>}>
            <SearchGroup />
          </Suspense>
          {isAuthenticated ? (
            <>
              <MenuCreateArticle />
              <Profile />
            </>
          ) : (
            <AuthForm />
          )}
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<MenuIcon />}
          aria-label="Открыть меню"
          bg={primaryColor}
          color={bgColor}
          _hover={{ bg: secondaryColor }}
        />
      </Flex>

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
                  <Profile />
                </>
              ) : (
                <AuthForm />
              )}
              <UINavItems />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
