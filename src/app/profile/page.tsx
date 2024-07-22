"use client";

import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { Container } from "@chakra-ui/react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { UserInfo } from "@/features/user/user-info";

export default function ProfilePage() {
  const { data: user } = useProfile();

  return (
    <Container maxW="6xl" py={10}>
      <UIHeader />
      <UIMain>{user && <UserInfo user={user} />}</UIMain>
    </Container>
  );
}
