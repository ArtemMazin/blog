"use client";

import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { ModalUpdatingProfile } from "@/features/profile/modal-updating-profile";

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      {/* <UIMain className="h-full w-full">
        {user && (
          <SimpleGrid columns={2} spacing={10} p={20}>
            <Box className="w-80 h-80 relative">
              {!!user?.avatar ? (
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + user?.avatar}
                  alt="Фото профиля"
                  fill
                  className="object-cover"
                  sizes="(max-width: 712px) 100vw, 50vw"
                />
              ) : (
                <Center className="w-full h-full bg-gray-200">
                  <Text fontSize={"4xl"}>
                    {user.name.slice(0, 2).toUpperCase()}
                  </Text>
                </Center>
              )}
            </Box>

            <Box className="p-4 flex flex-col gap-2">
              <Heading>{user?.name}</Heading>
              <Text>{user?.email}</Text>
              <Text>Дата регистрации: {user?.createdAt}</Text>

              {user && <ModalUpdatingProfile user={user} />}
            </Box>
          </SimpleGrid>
        )}
      </UIMain> */}
    </Container>
  );
}
