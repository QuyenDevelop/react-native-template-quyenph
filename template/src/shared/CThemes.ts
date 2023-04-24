import { DefaultTheme } from "@react-navigation/native";
import { Themes } from "@phamquyen/rn-core-components";

export const CThemes = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...Themes.Color },
  fonts: {
    primary: "Inter",
    medium: "Inter-Medium",
    regular: "Inter-Regular",
  },
  screenUtils: Themes.ScreenUtils,
  constantStyles: Themes.ConstantStyles,
};
