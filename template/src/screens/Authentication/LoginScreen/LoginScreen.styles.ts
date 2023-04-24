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
  forgotPassword: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.primary6s,
  },
  noAccount: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.black5s,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: CThemes.constantStyles.spacing16,
    paddingVertical: CThemes.constantStyles.spacing8,
    borderTopColor: CThemes.colors.black2s,
    borderTopWidth: 2 * StyleSheet.hairlineWidth,
  },
  help: {
    ...CGlobalStyles.text12,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.black5s,
  },
  contact: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.primary6s,
  },
});
