import { CGlobalStyles, CThemes } from "@shared";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  childContainer: {
    paddingTop: CThemes.screenUtils.scale(16),
    paddingHorizontal: CThemes.screenUtils.scale(10),
  },
  title: {
    ...CGlobalStyles.text24,
    ...CGlobalStyles.fontMedium,
    color: CThemes.colors.black6s,
    marginBottom: CThemes.screenUtils.scale(16),
  },
  noAccount: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.black5s,
  },
});
