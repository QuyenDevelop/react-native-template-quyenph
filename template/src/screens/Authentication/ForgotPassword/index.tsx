import { CButton, CTextInput } from "@components";
import { useAppNavigation, useAppSelector } from "@hooks";
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
import { styles } from "./ForgotPassword.styles";
import { useForgotPasswordScreen } from "./ForgotPassword.hook";

export interface ForgotPasswordParams {}

// type NavigationRoute = RouteProp<AuthStackParamList, SCREENS.LOGIN_SCREEN>;

export const ForgotPasswordScreen: React.FunctionComponent = () => {
  const navigation = useAppNavigation();
  //   const route = useRoute<NavigationRoute>();
  const language = useAppSelector((state: IRootState) => state.user.language);

  const { email, setEmail, isLoading, handleForgotPassword } =
    useForgotPasswordScreen();

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
          <Text style={styles.title}>{translate("label.register")}</Text>
          <View
            style={{
              marginVertical: CThemes.constantStyles.spacing40,
            }}
          >
            <CTextInput
              editable={!isLoading}
              label={translate("label.email")}
              placeholder={translate("loginScreen.email")}
              value={email}
              isRequired
              onChangeText={setEmail}
              onClearInput={() => setEmail("")}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize={"none"}
              returnKeyType="next"
            />
          </View>
          <CButton
            onPress={handleForgotPassword}
            name={translate("button.confirm")}
            isLoading={isLoading}
          />
          <View
            style={{
              ...CGlobalStyles.rowInline,
              marginTop: CThemes.constantStyles.spacing16,
              marginBottom: CThemes.constantStyles.spacing40,
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
