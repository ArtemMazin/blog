"use client";

import { IconButton, useDisclosure } from "@chakra-ui/react";
import { Menu as MenuIcon } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { MobileDrawer } from "./mobile-drawer";

export function MobileMenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { primaryColor, secondaryColor, bgColor } = useColors();

  return (
    <>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        icon={<MenuIcon />}
        aria-label="Открыть меню"
        bg={primaryColor}
        color={bgColor}
        _hover={{ bg: secondaryColor }}
      />
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}
