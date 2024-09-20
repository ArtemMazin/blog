import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface ArticleImageProps {
  imageUrl: string;
  title: string;
  onOpen: () => void;
}

export default function ArticleImage({
  imageUrl,
  title,
  onOpen,
}: ArticleImageProps) {
  return (
    <Box
      position="relative"
      h={{ base: "30vh", md: "40vh", lg: "50vh" }}
      onClick={onOpen}
      cursor="pointer"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  );
}
