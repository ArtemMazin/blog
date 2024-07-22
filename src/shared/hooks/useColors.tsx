import { useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { theme } from "../ui/theme/theme";

export function useColors() {
  const bgColor = useColorModeValue(
    theme.colors.light.background,
    theme.colors.dark.background,
  );
  const bannerColor = theme.colors.common.primary;
  const borderColor = useColorModeValue(
    theme.colors.light.secondary,
    theme.colors.dark.secondary,
  );
  const textColor = useColorModeValue(
    theme.colors.light.textSecondary,
    theme.colors.dark.textSecondary,
  );
  const avatarBgColor = useColorModeValue(
    theme.colors.light.backgroundAlt,
    theme.colors.dark.backgroundAlt,
  );
  const dangerColor = theme.colors.common.danger;
  const secondaryColor = useColorModeValue(
    theme.colors.light.secondary,
    theme.colors.dark.secondary,
  );
  const primaryColor = theme.colors.common.primary;

  return {
    bgColor,
    bannerColor,
    borderColor,
    textColor,
    avatarBgColor,
    dangerColor,
    secondaryColor,
    primaryColor,
  };
}
