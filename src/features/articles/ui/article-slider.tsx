"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useTopArticles } from "../hooks/useTopArticles";
import { useColors } from "@/shared/hooks/useColors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { ArticleCard } from "./article-card";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface SidebarProps {
  type: "characters" | "races";
}

export default function ArticleSlider({ type }: SidebarProps) {
  const { data: topArticles, isLoading } = useTopArticles(type);
  const { borderColor, textColor } = useColors();

  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <Box className="w-full my-4" borderColor={borderColor} p={6}>
        <Heading size="md" mb={4} color={textColor}>
          Популярные статьи
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} height="350px" />
          ))}
        </SimpleGrid>
      </Box>
    );
  }

  return (
    <Box className="w-full my-4" borderColor={borderColor} p={6}>
      <Heading size="md" mb={4} color={textColor}>
        Популярные статьи
      </Heading>
      <Slider {...settings}>
        {topArticles &&
          topArticles.map((article) => (
            <Box key={article._id} px={2}>
              <ArticleCard article={article} type={type} />
            </Box>
          ))}
      </Slider>
    </Box>
  );
}
