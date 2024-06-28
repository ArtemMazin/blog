import { defineStyleConfig } from "@chakra-ui/react";

export const IconButton = defineStyleConfig({
  baseStyle: {
    color: "white",
  },

  defaultProps: {
    variant: "solid",
    colorScheme: "blue",
    size: "sm",
  },
});
