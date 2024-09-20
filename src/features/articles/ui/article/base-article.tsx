"use client";

import {
  Box,
  VStack,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColors } from "@/shared/hooks/useColors";
import { ResponseUserDto } from "@/shared/api/generated";
import { ImageModal } from "@/shared/ui/ui-image-modal";
import ArticleActions from "./article-actions";
import ArticleContent from "./article-content";
import ArticleImage from "./article-image";

interface BaseArticleProps {
  id: string;
  type: "characters" | "races";
  title: string;
  image: string;
  author: ResponseUserDto;
  createdAt: string;
  isFavorite: boolean;
  onLikeClick: (articleId: string) => void;
  children?: React.ReactNode;
}

export function BaseArticle({
  id,
  type,
  title,
  image,
  author,
  createdAt,
  isFavorite,
  onLikeClick,
  children,
}: BaseArticleProps) {
  const { bgColor, textColor } = useColors();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  const fullImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`;

  return (
    <Box
      w="100%"
      h="100%"
      bg={bgColor}
      color={textColor}
      borderRadius={{ base: "none", md: "xl" }}
      overflow="hidden"
      boxShadow={{ base: "none", md: "lg" }}
      transition="all 0.3s"
    >
      <VStack spacing={0} align="stretch" h="100%">
        <ArticleImage imageUrl={fullImageUrl} title={title} onOpen={onOpen} />
        <ArticleContent title={title} author={author} createdAt={createdAt}>
          {children}
        </ArticleContent>
        <ArticleActions
          id={id}
          type={type}
          author={author}
          isFavorite={isFavorite}
          onLikeClick={onLikeClick}
          isMobile={isMobile}
        />
      </VStack>
      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        imageSrc={fullImageUrl}
        imageAlt={title}
      />
    </Box>
  );
}
