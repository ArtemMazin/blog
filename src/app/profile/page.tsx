"use client";

import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { ModalUpdatingProfile } from "@/features/profile/modal-updating-profile";
import { Mail, Calendar, Bookmark } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export default function ProfilePage() {
  const { data: user } = useProfile();

  const { bgColor, bannerColor, borderColor, textColor, avatarBgColor } =
    useColors();

  return (
    <Container maxW="6xl" py={10}>
      <UIHeader />
      <UIMain>
        {user && (
          <Box
            borderWidth={1}
            borderRadius="xl"
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
                    src={process.env.NEXT_PUBLIC_API_URL + user.avatar}
                    alt="Фото профиля"
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <Flex
                    bg={avatarBgColor}
                    h="full"
                    align="center"
                    justify="center"
                  >
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
                    Зарегистрирован:{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Text>
                </HStack>
                <Text maxW="md" color={textColor}>
                  {user.about || "Информация о пользователе отсутствует"}
                </Text>
                <Wrap justify="center" spacing={4}>
                  <WrapItem>
                    <Button
                      leftIcon={<Bookmark size={20} />}
                      colorScheme="blue"
                    >
                      Избранные статьи: {user.favorite_articles.length}
                    </Button>
                  </WrapItem>
                  <WrapItem>
                    <ModalUpdatingProfile user={user} />
                  </WrapItem>
                </Wrap>
              </VStack>
            </Flex>
          </Box>
        )}
      </UIMain>
    </Container>
  );
}
