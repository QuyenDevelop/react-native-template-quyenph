import { CButton, CCheckBox, CTextInput } from "@components";
import { SCREENS } from "@configs";
import { useAppNavigation, useAppSelector, useBoolean } from "@hooks";
import { AuthStackParamList } from "@navigation";
import { RouteProp } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { IRootState } from "@redux";
import { CGlobalStyles, CThemes, translate } from "@shared";
import React, { useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Footer, Header, MoreOptionLogin } from "../components";
import { LoginRequestParams, useLoginScreen } from "./LoginScreen.hook";
import { styles } from "./LoginScreen.styles";

export interface LoginScreenParams {
  isGoBack?: boolean;
}

type NavigationRoute = RouteProp<AuthStackParamList, SCREENS.LOGIN_SCREEN>;

export const LoginScreen: React.FunctionComponent = () => {
  const navigation = useAppNavigation();
  const route = useRoute<NavigationRoute>();
  const isGoBack = route?.params?.isGoBack;
  const [isSecure, , , toggleSecure] = useBoolean(true);
  const language = useAppSelector((state: IRootState) => state.user.language);
  const {
    email,
    password,
    isRemember,
    toggleRemember,
    isLoading,
    onClear,
    onChangeText,
    loginWithEmail,
  } = useLoginScreen();

  const gotoForgetPassword = () => navigation.navigate(SCREENS.FORGOT_PASSWORD);

  const gotoRegister = () => navigation.navigate(SCREENS.REGISTER_SCREEN);

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
              onChangeText={onChangeText(LoginRequestParams.EMAIL)}
              onClearInput={onClear(LoginRequestParams.EMAIL)}
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
              secureTextEntry={isSecure}
              onChangeText={onChangeText(LoginRequestParams.PASSWORD)}
              onClearInput={onClear(LoginRequestParams.PASSWORD)}
              containerStyle={{ marginTop: CThemes.constantStyles.spacing16 }}
              isRequired
              isShowIconRight
              rightIconName={isSecure ? "ic_eye" : "ic_eye_slash"}
              rightIconClick={toggleSecure}
            />
          </View>
          <View
            style={{
              ...CGlobalStyles.rowBetween,
              marginVertical: CThemes.constantStyles.spacing16,
            }}
          >
            <CCheckBox
              isChecked={isRemember}
              handleCheck={toggleRemember}
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
          <MoreOptionLogin />
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </View>
  );
};
