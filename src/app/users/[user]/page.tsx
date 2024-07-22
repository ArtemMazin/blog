"use client";

import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { Container } from "@chakra-ui/react";
import { useUser } from "@/features/user/hooks/useUser";
import { UserInfo } from "@/features/user/user-info";

export default function UserPage({ params }: { params: { user: string } }) {
  const { data: user } = useUser(params.user);

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain className="h-full w-full">
        {user && <UserInfo user={user} />}
      </UIMain>
    </Container>
  );
}
