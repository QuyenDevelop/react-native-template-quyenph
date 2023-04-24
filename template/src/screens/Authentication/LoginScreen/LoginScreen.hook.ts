import { CONSTANT, SCREENS } from "@configs";
import { AsyncStorage } from "@helpers";
import { useAppNavigation, useBoolean } from "@hooks";
import { useCallback, useEffect, useState } from "react";

export enum LoginRequestParams {
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD",
}

export const useLoginScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemember, showRemember, , toggleRemember] = useBoolean(false);
  const [isLoading, showLoading, hideLoading] = useBoolean(false);

  const onChangeText = useCallback(
    (type?: string) => (value: string) => {
      if (type === LoginRequestParams.EMAIL) return setEmail(value);
      setPassword(value);
    },
    [],
  );

  const onClear = useCallback(
    (type: string) => () => {
      if (type === LoginRequestParams.EMAIL) return setEmail("");
      return setPassword("");
    },
    [],
  );

  const getEmailRemember = async () => {
    const emailRemember = await AsyncStorage.getAsyncItem(
      CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER,
    );
    if (emailRemember) {
      setEmail(emailRemember);
      showRemember();
    }
  };

  useEffect(() => {
    getEmailRemember();
  }, []);

  const loginWithEmail = () => {
    showLoading();
    if (isRemember) {
      AsyncStorage.setAsyncItem(
        CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER,
        email,
      );
    } else {
      AsyncStorage.removeAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER);
    }
    // dispatch(
    //   asyncLoginAction({
    //     username: email,
    //     password: password,
    //   }),
    // );
    setTimeout(() => {
      hideLoading();
      navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION, {
        screen: SCREENS.HOME_SCREEN,
      });
    }, 2000);
  };

  return {
    email,
    password,
    isRemember,
    onChangeText,
    toggleRemember,
    onClear,
    isLoading,
    loginWithEmail,
  };
};