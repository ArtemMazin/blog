import { Box, Flex } from "@chakra-ui/react";
import { UILogo } from "../ui-logo";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenuButton } from "./mobile-menu-button";

export function UIHeader() {
  return (
    <Box as="header" py={1} mb={2} boxShadow="md">
      <Flex
        mx="auto"
        maxW="8xl"
        px={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <UILogo />
        <DesktopMenu />
        <MobileMenuButton />
      </Flex>
    </Box>
  );
}
