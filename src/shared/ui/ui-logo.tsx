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
        width="240"
        height="100"
        viewBox="0 0 240 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="120"
          y="60"
          fontFamily="'Trebuchet MS', sans-serif"
          fontSize="42"
          fontWeight="bold"
          textAnchor="middle"
          fill={contentColor}
        >
          STAR WARS
        </text>
        <path
          d="M10 80 L230 80"
          stroke={contentColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="120" cy="80" r="8" fill={dangerColor} />
      </AdaptiveSvg>
    </Link>
  );
}
