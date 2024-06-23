import { extendTheme, StyleFunctionProps, TabPanel } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Button } from "./theme-button";
import { Input } from "./theme-input";
import { FormLabel } from "./theme-form-label";
import { Tabs } from "./theme-tabs";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("var(--dark-secondary)", "var(--primarycontent)")(props),
        bg: mode("var(--primarycontent)", "var(--dark-background)")(props),
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
  },
});
