"use client";

import { useProfile } from "@/features/profile/hooks/useProfile";
import { UserInfo } from "@/features/user/user-info";
import { Box, Spinner } from "@chakra-ui/react";

export function ProfileContent() {
  const { data: user, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center">Ошибка загрузки профиля: {error.message}</Box>
    );
  }

  if (!user) {
    return <Box textAlign="center">Профиль не найден</Box>;
  }

  return <UserInfo user={user} />;
}
