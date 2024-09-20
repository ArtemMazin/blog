"use client";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useColors } from "@/shared/hooks/useColors";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";
import CardImage from "./card-image";
import PremiumBadge from "./premium-badge";
import CardContent from "./card-content";

interface BaseArticleCardProps {
  article: ResponseCharacterArticleDto | ResponseRaceArticleDto;
  type: "characters" | "races";
}

export function BaseArticleCard({ article, type }: BaseArticleCardProps) {
  const { bgColor, textColor } = useColors();
  const cardHeight =
    useBreakpointValue({ base: "auto", md: "350px" }) || "auto";
  const imageHeight =
    useBreakpointValue({ base: "200px", md: "180px" }) || "200px";
  const contentHeight =
    useBreakpointValue({ base: "auto", md: "170px" }) || "auto";

  return (
    <Box
      overflow="hidden"
      boxShadow="lg"
      position="relative"
      height={cardHeight}
      color={textColor}
      width="100%"
    >
      {article.isPremium && <PremiumBadge />}
      <CardImage article={article} height={imageHeight} />
      <CardContent
        article={article}
        type={type}
        bgColor={bgColor}
        height={contentHeight}
      />
    </Box>
  );
}
