import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, LoginScreenParams, RegisterScreen } from "@screens";
import React from "react";

export type AuthStackParamList = {
  [SCREENS.LOGIN_SCREEN]: LoginScreenParams;
  [SCREENS.REGISTER_SCREEN]: undefined;
};

const AuthenticationNavigator =
  createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <AuthenticationNavigator.Navigator
      initialRouteName={SCREENS.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationNavigator.Screen
        name={SCREENS.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <AuthenticationNavigator.Screen
        name={SCREENS.REGISTER_SCREEN}
        component={RegisterScreen}
      />
    </AuthenticationNavigator.Navigator>
  );
};
