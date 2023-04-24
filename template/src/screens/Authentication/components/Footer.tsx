import { CIcon } from "@components";
import { CThemes, translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Platform, Text, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../LoginScreen/LoginScreen.styles";

interface FooterProps {}

const _Footer: FunctionComponent<FooterProps> = () => {
  const insets = useSafeAreaInsets();
  const handleContactUs = () => {};

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.footer,
        Platform.OS === "ios" && { paddingBottom: insets.bottom },
      ]}
      onPress={handleContactUs}
    >
      <CIcon
        name={"ic_user_headset"}
        size={CThemes.constantStyles.iconSizeMedium}
        color={CThemes.colors.primary6s}
      />
      <View
        style={{
          marginLeft: CThemes.constantStyles.spacing8,
        }}
      >
        <Text style={styles.help}>{translate("loginScreen.needHelp")}</Text>
        <Text style={styles.contact}>{translate("loginScreen.contact")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Footer = React.memo(_Footer);
