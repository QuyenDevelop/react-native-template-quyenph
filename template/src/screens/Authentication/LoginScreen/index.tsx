import { CButton, CIcon, CRadioCheck, CTextInput } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { useAppNavigation, useAppSelector, useBoolean } from "@hooks";
import { AuthStackParamList } from "@navigation";
import { RouteProp } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { CGlobalStyles, CThemes, translate } from "@shared";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IRootState } from "src/redux/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { styles } from "./styles";

export interface LoginScreenParams {
  isGoBack?: boolean;
}

type NavigationRoute = RouteProp<AuthStackParamList, SCREENS.LOGIN_SCREEN>;

export const LoginScreen: React.FunctionComponent = () => {
  const route = useRoute<NavigationRoute>();
  const navigation = useAppNavigation();
  const isGoBack = route?.params?.isGoBack;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [isRemember, setIsRemember] = useState(false);
  const [isLoading, showLoading, hideLoading] = useBoolean(false);
  const language = useAppSelector((state: IRootState) => state.user.language);

  // const locates = {
  //   locates: RNLocalize.getLocales(),
  // };
  const onClearEmail = () => {
    setEmail("");
  };
  const onClearPassword = () => {
    setPassword("");
  };

  const loginWithEmail = () => {
    navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION, {
      screen: SCREENS.HOME_SCREEN,
    });
  };
  const loginWithGoogle = () => {};
  const loginWithFacebook = () => {};
  const loginWithApple = () => {};
  const gotoForgetPassword = () => {
    // navigation.navigate(SCREENS.FORGOT_PASSWORD);
  };
  const gotoRegister = () => {
    // navigation.navigate(SCREENS.FORGOT_PASSWORD);
  };

  useEffect(() => {}, [language]);

  return (
    <View
      style={{
        ...CGlobalStyles.appContent,
        paddingTop: CThemes.screenUtils.getStatusBarHeight(),
      }}
    >
      <Header isGoBack={isGoBack} language={language || ""} />
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={CGlobalStyles.appContent}
      >
        <ScrollView
          style={styles.childContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{translate("label.login")}</Text>
          <View
            style={{
              marginTop: CThemes.constantStyles.spacing40,
            }}
          >
            <CTextInput
              editable={!isLoading}
              label={translate("label.email")}
              placeholder={translate("loginScreen.email")}
              value={email}
              isRequired
              onChangeText={setEmail}
              onClearInput={onClearEmail}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize={"none"}
              returnKeyType="next"
            />
            <CTextInput
              label={translate("label.password")}
              editable={!isLoading}
              placeholder={translate("loginScreen.password")}
              returnKeyType="done"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={isSecure}
              onClearInput={onClearPassword}
              containerStyle={{ marginTop: CThemes.constantStyles.spacing16 }}
              isRequired
              isShowIconRight
              rightIconName={isSecure ? "ic_eye" : "ic_eye_slash"}
              rightIconClick={() => setIsSecure(!isSecure)}
            />
          </View>
          <View
            style={{
              ...CGlobalStyles.rowBetween,
              marginVertical: CThemes.constantStyles.spacing16,
            }}
          >
            <CRadioCheck
              isChecked={isRemember}
              handleCheck={() => {
                setIsRemember(!isRemember);
              }}
              content={translate("loginScreen.remember")}
            />
            <TouchableOpacity onPress={gotoForgetPassword}>
              <Text style={styles.forgotPassword}>
                {translate("loginScreen.forgotPassword")}
              </Text>
            </TouchableOpacity>
          </View>
          <CButton
            onPress={loginWithEmail}
            name={translate("label.login")}
            isLoading={isLoading}
          />
          <View
            style={{
              ...CGlobalStyles.rowInline,
              marginVertical: CThemes.constantStyles.spacing16,
            }}
          >
            <Text style={styles.noAccount}>
              {translate("loginScreen.noAccount")}
            </Text>
            <TouchableOpacity onPress={gotoRegister}>
              <Text
                style={{
                  ...styles.noAccount,
                  marginLeft: CThemes.constantStyles.spacing8,
                  color: CThemes.colors.primary6s,
                }}
              >
                {translate("loginScreen.createAccount")}
              </Text>
            </TouchableOpacity>
          </View>
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
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </View>
  );
};
