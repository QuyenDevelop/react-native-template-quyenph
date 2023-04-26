import { CONSTANT } from "@configs";
import { AsyncStorage } from "@helpers";
import { useAppDispatch, useBoolean } from "@hooks";
import { asyncLoginAction } from "@redux";
import { useEffect, useState } from "react";

export enum LoginRequestParams {
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD",
}

export const useLoginScreen = () => {
  // const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemember, showRemember, , toggleRemember] = useBoolean(false);
  const [isLoading, showLoading, hideLoading] = useBoolean(false);

  const onChangeText = (type?: string) => (value: string) => {
    if (type === LoginRequestParams.EMAIL) return setEmail(value);
    setPassword(value);
  };

  const onClear = (type: string) => () => {
    if (type === LoginRequestParams.EMAIL) return setEmail("");
    return setPassword("");
  };

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

  const loginWithEmail = async () => {
    showLoading();
    if (isRemember) {
      AsyncStorage.setAsyncItem(
        CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER,
        email,
      );
    } else {
      AsyncStorage.removeAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER);
    }
    setTimeout(() => {
      hideLoading();
      dispatch(
        asyncLoginAction({
          username: email,
          password: password,
        }),
      );
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
