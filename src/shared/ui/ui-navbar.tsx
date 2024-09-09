"use client";

import { Box, Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColors } from "@/shared/hooks/useColors";
import { UINavItems } from "./ui-nav-items";
import { useProfile } from "@/features/profile/hooks/useProfile";

export default function Navbar() {
  const { bgColor, bannerColor, borderColor, textColor, avatarBgColor } =
    useColors();

  const { data: user } = useProfile();

  return (
    <Box
      display={{ base: "none", md: "block" }}
      position="sticky"
      top={0}
      h="100vh"
      w="250px"
      bg={bgColor}
      color={textColor}
      borderRadius="xl"
      borderWidth={1}
      borderColor={borderColor}
      boxShadow="xl"
      overflowY="auto"
    >
      <Box bg={bannerColor} h={20} />
      <Flex direction="column" align="center" mt={-16} p={4}>
        <Box
          borderRadius="full"
          borderWidth={4}
          borderColor={bgColor}
          overflow="hidden"
          boxSize={24}
          position="relative"
          bg={avatarBgColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {user?.avatar ? (
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + user.avatar}
              alt="Фото профиля"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Flex bg={avatarBgColor} h="full" align="center" justify="center">
              <Text fontSize="2xl" fontWeight="bold">
                {user?.name.slice(0, 2).toUpperCase()}
              </Text>
            </Flex>
          )}
        </Box>
        <UINavItems />
      </Flex>
    </Box>
  );
}
