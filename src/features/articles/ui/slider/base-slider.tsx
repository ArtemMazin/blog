"use client";

import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import { useColors } from "@/shared/hooks/useColors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface BaseArticleSliderProps {
  title: string;
  children: React.ReactNode;
}

export function BaseArticleSlider({ title, children }: BaseArticleSliderProps) {
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

  return (
    <Box className="w-full my-4" borderColor={borderColor} p={8}>
      <Heading size="md" mb={4} color={textColor}>
        {title}
      </Heading>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
}
