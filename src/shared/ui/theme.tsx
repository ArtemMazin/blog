import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("#2e3a59", "#fff")(props),
        bg: mode("#fff", "#101521")(props),
      },
      aside: {
        bg: mode("#f4f7fd", "#171d2d")(props),
      },
    }),
  },
  components: {
    Button: {
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
          bg: "#217bd8",
          color: "#fff",
        },
      },
    },
    Input: {
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
            bg: mode("#e0e4ed", "#2e3a59")(props),
          },
        }),
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "16px",
      },
    },
  },
});
