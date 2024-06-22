import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: props.colorMode === "dark" ? "#fff" : "#2e3a59",
        bg: props.colorMode === "dark" ? "#101521" : "#fff",
      },
      aside: {
        bg: props.colorMode === "dark" ? "#171d2d" : "#f4f7fd",
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
  },
});
