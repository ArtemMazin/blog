"use client";

import { Flex, IconButton, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { UIButton } from "@/shared/ui/ui-button";
import { ResponseUserDto } from "@/shared/api/generated";
import { ModalDeletingArticle } from "../modal-deleting-article";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useColors } from "@/shared/hooks/useColors";

interface ArticleActionsProps {
  id: string;
  type: "characters" | "races";
  author: ResponseUserDto;
  isFavorite: boolean;
  onLikeClick: (articleId: string) => void;
  isMobile: boolean;
}

export default function ArticleActions({
  id,
  type,
  author,
  isFavorite,
  onLikeClick,
  isMobile,
}: ArticleActionsProps) {
  const router = useRouter();
  const { data: user } = useProfile();
  const { borderColor, dangerColor } = useColors();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "stretch", md: "center" }}
      gap={4}
      p={{ base: 4, md: 6, lg: 8 }}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={2}
        width={{ base: "100%", md: "auto" }}
      >
        {user && author._id === user._id && (
          <>
            <ModalDeletingArticle id={id} type={type} />
            <Link
              href={`edit-article/${id}`}
              style={{ width: isMobile ? "100%" : "auto" }}
            >
              <UIButton className="w-full">Изменить статью</UIButton>
            </Link>
          </>
        )}
      </Flex>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={2}
        width={{ base: "100%", md: "auto" }}
        justifyContent={{ base: "flex-start", sm: "flex-end" }}
      >
        {user && (
          <IconButton
            aria-label={
              isFavorite ? "Удалить из избранного" : "Добавить в избранное"
            }
            icon={
              <Heart
                fill={isFavorite ? dangerColor : "none"}
                color={isFavorite ? dangerColor : "currentColor"}
              />
            }
            onClick={() => onLikeClick(id)}
            variant="ghost"
            size="md"
            width={{ base: "100%", sm: "auto" }}
          />
        )}
        <Button
          variant="outline"
          onClick={() => router.back()}
          borderColor={borderColor}
          width={{ base: "100%", sm: "auto" }}
        >
          Назад
        </Button>
      </Flex>
    </Flex>
  );
}
