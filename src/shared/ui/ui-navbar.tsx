"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useColors } from "@/shared/hooks/useColors";
import { UINavItems } from "./ui-nav-items";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { UserAvatar } from "./user-avatar";

export default function Navbar() {
  const { bgColor, bannerColor, borderColor, textColor } = useColors();
  const { data: user } = useProfile();

  return (
    <Box
      display={{ base: "none", md: "block" }}
      position="sticky"
      top={0}
      h="90vh"
      w="250px"
      bg={bgColor}
      color={textColor}
      borderWidth={1}
      borderColor={borderColor}
      boxShadow="xl"
      overflowY="auto"
    >
      <Box bg={bannerColor} h={20} />
      <Flex direction="column" align="center" mt={-16} p={4}>
        <UserAvatar user={user} />
        <UINavItems />
      </Flex>
    </Box>
  );
}
