"use client";

import { useProfile } from "@/features/profile/hooks/useProfile";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const useHandlePremium = () => {
  const router = useRouter();
  const toast = useToast();
  const { data: user } = useProfile();

  const handleClick = (
    article: ResponseCharacterArticleDto | ResponseRaceArticleDto,
  ) => {
    if (article.isPremium && !user?.isPremium) {
      toast({
        title: "Ошибка",
        description:
          "Для просмотра этой статьи необходимо подписаться на премиум",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    router.push(`/${article._id}`);
  };

  return { handleClick };
};
