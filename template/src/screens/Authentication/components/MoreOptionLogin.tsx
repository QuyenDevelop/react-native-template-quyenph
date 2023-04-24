import { CGlobalStyles, CThemes, translate } from "@shared";
import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { styles } from "./styles";
import { CIcon } from "@components";
import { CONSTANT } from "@configs";

const _MoreOptionLogin: React.FC = () => {
  const loginWithGoogle = () => {};
  const loginWithFacebook = () => {};
  const loginWithApple = () => {};

  return (
    <View>
      <View style={CGlobalStyles.rowCenter}>
        <View style={styles.line} />
        <Text style={styles.orLogin}>{translate("label.orLogin")}</Text>
        <View style={styles.line} />
      </View>
      <View
        style={{
          ...CGlobalStyles.rowCenter,
          marginTop: CThemes.constantStyles.spacing16,
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.buttonSocial,
            borderColor: CThemes.colors.red5s,
          }}
          onPress={loginWithGoogle}
        >
          <CIcon
            type={CONSTANT.ICON_TYPE.Entypo}
            name={"google-"}
            color={CThemes.colors.red5s}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonSocial,
            borderColor: CThemes.colors.brandB,
          }}
          onPress={loginWithFacebook}
        >
          <CIcon
            type={CONSTANT.ICON_TYPE.FontAwesome}
            name={"facebook"}
            size={24}
            color={CThemes.colors.brandB}
          />
        </TouchableOpacity>
        {Platform.OS === "ios" &&
          Number(Platform.Version.toString().split(".")[0]) >= 13 && (
            <TouchableOpacity
              style={{
                ...styles.buttonSocial,
                borderColor: CThemes.colors.black6s,
              }}
              onPress={loginWithApple}
            >
              <CIcon
                type={CONSTANT.ICON_TYPE.FontAwesome}
                name={"apple"}
                size={24}
                color={CThemes.colors.black6s}
              />
            </TouchableOpacity>
          )}
      </View>
    </View>
  );
};

export const MoreOptionLogin = React.memo(_MoreOptionLogin);
