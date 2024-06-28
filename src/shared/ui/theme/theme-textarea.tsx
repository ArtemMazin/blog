import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Textarea = defineStyleConfig({
  baseStyle: {
    fontSize: "15px",
  },
  defaultProps: {
    size: "sm",
    variant: "filled",
  },
  variants: {
    filled: (props: StyleFunctionProps) => ({
      bg: mode("var(--light-secondary)", "var(--dark-secondary)")(props),
    }),
  },
});
