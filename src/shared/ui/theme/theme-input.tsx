import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Input = defineStyleConfig({
  defaultProps: {
    size: "sm",
    variant: "filled",
  },
  variants: {
    filled: (props: StyleFunctionProps) => ({
      field: {
        bg: mode("var(--light-secondary)", "var(--dark-secondary)")(props),
      },
    }),
  },
});
