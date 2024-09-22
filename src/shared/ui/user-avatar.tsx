import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColors } from "@/shared/hooks/useColors";

type UserAvatarProps = {
  user?: {
    avatar?: string;
    name: string;
  };
};

export function UserAvatar({ user }: UserAvatarProps) {
  const { bgColor, avatarBgColor } = useColors();

  return (
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
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <Flex bg={avatarBgColor} h="full" align="center" justify="center">
          <Text fontSize="2xl" fontWeight="bold">
            {user?.name.slice(0, 2).toUpperCase()}
          </Text>
        </Flex>
      )}
    </Box>
  );
}
