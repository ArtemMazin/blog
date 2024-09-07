"use client";

import Link from "next/link";
import { useColors } from "../hooks/useColors";
import styled from "@emotion/styled";

const AdaptiveSvg = styled.svg`
  @media (max-width: 768px) {
    width: 160px;
    height: 50px;
  }
`;

export function UILogo() {
  const { contentColor, dangerColor } = useColors();

  return (
    <Link href="/">
      <AdaptiveSvg
        width="320"
        height="100"
        viewBox="0 0 320 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="160"
          y="60"
          fontFamily="'Trebuchet MS', sans-serif"
          fontSize="48"
          fontWeight="bold"
          textAnchor="middle"
          fill={contentColor}
        >
          STAR WARS
        </text>
        <path
          d="M60 80 L260 80"
          stroke={contentColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="160" cy="80" r="8" fill={dangerColor} />
      </AdaptiveSvg>
    </Link>
  );
}
