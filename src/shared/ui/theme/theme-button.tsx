import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "500",
    fontSize: "16px",
    borderRadius: "4px",
  },

  defaultProps: {
    colorScheme: "blue",
    size: "sm",
  },

  variants: {
    solid: {
      bg: "var(--primary)",
      color: "var(--primarycontent)",
    },
  },
});
