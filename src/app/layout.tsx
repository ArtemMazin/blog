import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Box, Container } from "@chakra-ui/react";
import { UIHeader } from "@/shared/ui/ui-header/ui-header";
import Navbar from "@/shared/ui/ui-navbar";
import { getMetadata } from "./metadata";

const font = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = getMetadata(
  "Star Wars Universe",
  "Исследуйте мир Звездных войн: персонажи, расы и многое другое",
  "/",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Container maxW="8xl" className="min-h-screen" p={{ base: 2, md: 6 }}>
            <Box
              display="grid"
              gridTemplateAreas={`
                "header header"
                "nav main"
              `}
              gridTemplateRows="auto 1fr"
              gridTemplateColumns="auto 1fr"
              minHeight="100vh"
              gap={4}
            >
              <Box gridArea="header">
                <UIHeader />
              </Box>
              <Box gridArea="nav">
                <Navbar />
              </Box>
              <Box gridArea="main" overflowX="hidden">
                {children}
              </Box>
            </Box>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
