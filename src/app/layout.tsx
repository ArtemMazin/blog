import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Box, Container, Flex } from "@chakra-ui/react";
import Navbar from "@/shared/ui/ui-navbar";
import { UIHeader } from "@/shared/ui/ui-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars",
  description: "Star Wars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container
            maxW="8xl"
            className="h-screen relative"
            p={{ base: 2, md: 6 }}
          >
            <UIHeader />
            <Flex>
              <Navbar />
              <Box flex={1} ml={6}>
                {children}
              </Box>
            </Flex>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
