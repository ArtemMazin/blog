"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useColors } from "@/shared/hooks/useColors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { ArticleCard } from "./article-card";
import { ArticleType } from "@/shared/api/generated";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface ArticleSliderProps {
  articles: ArticleType[] | undefined;
  type: "characters" | "races";
}

export default function ArticleSlider({ articles, type }: ArticleSliderProps) {
  const { borderColor, textColor } = useColors();

  const title =
    type === "characters" ? "Популярные персонажи" : "Популярные расы";

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

  return (
    <Box className="w-full my-4" borderColor={borderColor} p={8}>
      <Heading size="md" mb={4} color={textColor}>
        {title}
      </Heading>
      <Slider {...settings}>
        {articles &&
          articles.map((article) => (
            <Box key={article._id} px={2}>
              <ArticleCard article={article} type={type} />
            </Box>
          ))}
      </Slider>
    </Box>
  );
}
