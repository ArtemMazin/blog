"use client";

import * as React from "react";
import { TabsWithAuthForm } from "@/features/auth/ui/tabs-with-auth-form";
import { UILogo } from "@/shared/ui/ui-logo";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { LogIn } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export function AuthForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bgColor, primaryColor } = useColors();

  return (
    <>
      <Button
        leftIcon={<LogIn size={20} />}
        px={6}
        onClick={onOpen}
        bg={primaryColor}
        color={"white"}
      >
        Войти
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerHeader borderBottomWidth="1px" p={4}>
            <Flex justify="space-between" align="center">
              <UILogo />
              <Button variant="ghost" onClick={onClose}>
                &times;
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Box mt={8}>
              <TabsWithAuthForm onClose={onClose} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
