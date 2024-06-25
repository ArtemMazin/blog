"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../shared/ui/theme/theme";
import * as React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}
        toastOptions={{
          defaultOptions: { duration: 5000, isClosable: true, position: "top" },
        }}
      >
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  );
};
