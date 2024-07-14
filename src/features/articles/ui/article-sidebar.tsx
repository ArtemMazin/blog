"use client";

import { articlesControllerGetAllArticles } from "@/shared/api/generated";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Sidebar() {
  const router = useRouter();
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesControllerGetAllArticles().then((res) => res.data),
  });

  return (
    <Box className="sticky top-0 h-screen overflow-y-auto max-w-xs my-4 w-full flex flex-col shrink-0 gap-4 snap-y hide-scrollbar">
      {articles &&
        articles.map((article) => (
          <Box
            key={article._id}
            className="w-full h-40 flex flex-col justify-end shrink-0 relative rounded-lg text-white snap-start"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + article.image}
              alt={article?.title}
              fill
              className="object-cover"
              sizes="(max-width: 712px) 100vw, 50vw"
            />
            <Box
              position="absolute"
              className="p-2 w-full flex flex-col gap-2 bg-black/50 hover:bg-black transition-all duration-200"
            >
              <Heading size={"xs"} noOfLines={2}>
                {article.title}
              </Heading>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push(article._id)}
              >
                Подробнее
              </Button>
            </Box>
          </Box>
        ))}
    </Box>
  );
}
