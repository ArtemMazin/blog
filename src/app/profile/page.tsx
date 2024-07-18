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

export default function ProfilePage() {
  const { data: user } = useProfile();

  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <UIMain className="h-full w-full">
        {user && (
          <SimpleGrid columns={2} spacing={10} p={20}>
            <Box className="max-w-80 w-full max-h-80 h-full relative">
              <Image
                src={
                  "https://images.unsplash.com/photo-1721265250424-a2ad2f1efcf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Фото профиля"
                fill
                className="object-cover"
                sizes="(max-width: 712px) 100vw, 50vw"
              />
            </Box>
            <Box className="p-4 flex flex-col gap-2">
              <Heading>{user?.name}</Heading>
              <Text>{user?.email}</Text>
              <Text>Дата регистрации: {user?.createdAt}</Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo
              nulla fugiat eum minima officia, dignissimos blanditiis deserunt
              porro obcaecati provident tempora. Culpa ipsam voluptatem nihil
              odit quod maxime. Recusandae?
              {user && <ModalUpdatingProfile user={user} />}
            </Box>
          </SimpleGrid>
        )}
      </UIMain>
    </Container>
  );
}
