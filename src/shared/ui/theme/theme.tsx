import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Button } from "./theme-button";
import { Input } from "./theme-input";
import { FormLabel } from "./theme-form-label";
import { Tabs } from "./theme-tabs";
import { Textarea } from "./theme-textarea";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("var(--dark-secondary)", "var(--primarycontent)")(props),
        bg: mode("var(--light-backgroundalt)", "var(--dark-background)")(props),
      },
      aside: {
        bg: mode(
          "var(--light-backgroundalt)",
          "var(--dark-backgroundalt)",
        )(props),
      },
    }),
  },
  components: {
    Button,
    Input,
    FormLabel,
    Tabs,
    Textarea,
  },
  colors: {
    light: {
      background: "var(--primarycontent)",
      backgroundAlt: "var(--light-backgroundalt)",
      secondary: "var(--light-secondary)",
      textSecondary: "var(--light-textsecondary)",
      gray: "var(--light-gray)",
      link: "var(--light-link)",
    },
    dark: {
      background: "var(--dark-background)",
      backgroundAlt: "var(--dark-backgroundalt)",
      secondary: "var(--dark-secondary)",
      textSecondary: "var(--dark-textsecondary)",
      gray: "var(--dark-gray)",
      link: "var(--dark-link)",
    },
    common: {
      primary: "var(--primary)",
      danger: "var(--danger)",
    },
  },
});
