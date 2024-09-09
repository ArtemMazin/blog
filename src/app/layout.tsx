import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Box, Container } from "@chakra-ui/react";
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
