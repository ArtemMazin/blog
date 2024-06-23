import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Input = {
  baseStyle: {
    fontWeight: "500",
    fontSize: "16px",
    borderRadius: "4px",
  },
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
};
