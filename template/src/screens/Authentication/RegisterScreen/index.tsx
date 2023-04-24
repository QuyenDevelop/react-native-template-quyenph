import { CButton, CTextInput } from "@components";
import { useAppNavigation, useAppSelector, useBoolean } from "@hooks";
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
import { styles } from "./Register.styles";
import { useRegisterScreen, RegisterRequestParams } from "./Register.hook";

export interface RegisterScreenParams {}

// type NavigationRoute = RouteProp<AuthStackParamList, SCREENS.LOGIN_SCREEN>;

export const RegisterScreen: React.FunctionComponent = () => {
  const navigation = useAppNavigation();
  const language = useAppSelector((state: IRootState) => state.user.language);
  const [isSecurePass, , , toggleSecurePass] = useBoolean(true);
  const [isSecureConfirm, , , toggleSecureConfirm] = useBoolean(true);

  const {
    email,
    password,
    confirm,
    onChangeText,
    onClear,
    isLoading,
    handleRegister,
  } = useRegisterScreen();

  useEffect(() => {}, [language]);

  return (
    <View
      style={{
        ...CGlobalStyles.appContent,
        paddingTop: CThemes.screenUtils.getStatusBarHeight(),
      }}
    >
      <Header isGoBack={true} language={language || ""} />
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
              label={translate("label.email")}
              placeholder={translate("loginScreen.email")}
              value={email}
              isRequired
              onChangeText={onChangeText(RegisterRequestParams.EMAIL)}
              onClearInput={onClear(RegisterRequestParams.EMAIL)}
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
              secureTextEntry={isSecurePass}
              onChangeText={onChangeText(RegisterRequestParams.PASSWORD)}
              onClearInput={onClear(RegisterRequestParams.PASSWORD)}
              containerStyle={{ marginTop: CThemes.constantStyles.spacing16 }}
              isRequired
              isShowIconRight
              rightIconName={isSecurePass ? "ic_eye" : "ic_eye_slash"}
              rightIconClick={toggleSecurePass}
            />
            <CTextInput
              label={translate("label.password")}
              editable={!isLoading}
              placeholder={translate("loginScreen.password")}
              returnKeyType="done"
              value={confirm}
              secureTextEntry={isSecureConfirm}
              onChangeText={onChangeText}
              onClearInput={onClear}
              containerStyle={{ marginTop: CThemes.constantStyles.spacing16 }}
              isRequired
              isShowIconRight
              rightIconName={isSecureConfirm ? "ic_eye" : "ic_eye_slash"}
              rightIconClick={toggleSecureConfirm}
            />
          </View>
          <CButton
            onPress={handleRegister}
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
            <TouchableOpacity onPress={navigation.goBack}>
              <Text
                style={{
                  ...styles.noAccount,
                  marginLeft: CThemes.constantStyles.spacing8,
                  color: CThemes.colors.primary6s,
                }}
              >
                {translate("label.login")}
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
