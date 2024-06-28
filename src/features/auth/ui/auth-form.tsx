"use client";

import { TabsWithAuthForm } from "@/features/auth/ui/tabs-with-auth-form";
import { UILogo } from "@/shared/ui/ui-logo";
import * as React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { UIButton } from "@/shared/ui/ui-button";

export function AuthForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <UIButton onClick={onOpen}>Войти</UIButton>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <UILogo className="mb-20" />
          </DrawerHeader>

          <DrawerBody>
            <TabsWithAuthForm onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
