"use client";

import {
  Flex,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Button,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { ModalUpdatingProfile } from "../profile/modal-updating-profile";
import { useColors } from "@/shared/hooks/useColors";
import Image from "next/image";
import { Bookmark, Calendar, Mail } from "lucide-react";
import { ResponseUserDto } from "@/shared/api/generated";
import { useProfile } from "../profile/hooks/useProfile";
import SafeHTML from "@/shared/ui/safeHTML";

export interface IUserInfoProps {
  user: ResponseUserDto;
}

export const UserInfo = React.memo(function UserInfo({ user }: IUserInfoProps) {
  const { bgColor, bannerColor, borderColor, textColor, avatarBgColor } =
    useColors();
  const { data: authUser } = useProfile();

  return (
    <Box
      borderWidth={1}
      overflow="hidden"
      boxShadow="xl"
      bg={bgColor}
      borderColor={borderColor}
    >
      <Box bg={bannerColor} h={40} position="relative" />
      <Flex direction="column" align="center" mt={-20} p={6}>
        <Box
          borderRadius="full"
          borderWidth={4}
          borderColor={bgColor}
          overflow="hidden"
          boxSize={40}
          position="relative"
        >
          {user?.avatar ? (
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + user.avatar}
              alt="Фото профиля"
              fill
              className="object-cover"
            />
          ) : (
            <Flex bg={avatarBgColor} h="full" align="center" justify="center">
              <Text fontSize="4xl" fontWeight="bold">
                {user.name.slice(0, 2).toUpperCase()}
              </Text>
            </Flex>
          )}
        </Box>
        <VStack spacing={4} mt={4} textAlign="center">
          <Heading size="xl">{user.name}</Heading>
          <HStack spacing={4}>
            <Mail size={20} color={textColor} />
            <Text color={textColor}>{user.email}</Text>
          </HStack>
          <HStack spacing={4}>
            <Calendar size={20} color={textColor} />
            <Text color={textColor}>
              Зарегистрирован: {new Date(user.createdAt).toLocaleDateString()}
            </Text>
          </HStack>
          <Box maxW="md" color={textColor}>
            <SafeHTML
              html={user.about || "Информация о пользователе отсутствует"}
            />
          </Box>
          <Wrap justify="center" spacing={4}>
            <WrapItem>
              <Button leftIcon={<Bookmark size={20} />} colorScheme="blue">
                Избранные статьи: {user.favorite_articles.length}
              </Button>
            </WrapItem>
            {authUser && user._id === authUser._id && (
              <WrapItem>
                <ModalUpdatingProfile user={user} />
              </WrapItem>
            )}
          </Wrap>
        </VStack>
      </Flex>
    </Box>
  );
});
