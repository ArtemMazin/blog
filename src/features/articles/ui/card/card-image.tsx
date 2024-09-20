import Image from "next/image";
import { Box } from "@chakra-ui/react";
import {
  ResponseCharacterArticleDto,
  ResponseRaceArticleDto,
} from "@/shared/api/generated";

interface CardImageProps {
  article: ResponseCharacterArticleDto | ResponseRaceArticleDto;
  height: string | number;
}

export default function CardImage({ article, height }: CardImageProps) {
  return (
    <Box height={height} position="relative" overflow="hidden">
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_URL + article.image}
        alt={article.title}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  );
}
