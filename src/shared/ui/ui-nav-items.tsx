import { Home, Users, Globe, Album } from "lucide-react";
import * as React from "react";
import { useColors } from "../hooks/useColors";
import { VStack, Link, Button } from "@chakra-ui/react";

export function UINavItems() {
  const { borderColor } = useColors();

  const navItems = [
    { name: "Главная", href: "/", icon: Home },
    { name: "Персонажи", href: "/characters", icon: Users },
    { name: "Расы", href: "/races", icon: Globe },
  ];

  return (
    <VStack spacing={6} mt={6} align="stretch" width="100%">
      {navItems.map((item) => (
        <Button
          key={item.name}
          as={Link}
          href={item.href}
          leftIcon={<item.icon size={20} />}
          justifyContent="flex-start"
          variant="ghost"
          width="100%"
          _hover={{ bg: borderColor }}
        >
          {item.name}
        </Button>
      ))}
    </VStack>
  );
}
