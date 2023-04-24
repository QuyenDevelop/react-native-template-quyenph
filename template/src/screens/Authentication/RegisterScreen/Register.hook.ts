import { useAppNavigation, useBoolean } from "@hooks";
import { useCallback, useState } from "react";

export enum RegisterRequestParams {
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD",
}

export const useRegisterScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const [isLoading, showLoading, hideLoading] = useBoolean(false);

  const onChangeText = useCallback(
    (type?: string) => (value: string) => {
      if (type === RegisterRequestParams.EMAIL) setEmail(value);
      if (type === RegisterRequestParams.PASSWORD) setPassword(value);
      setConfirm(value);
    },
    [],
  );

  const onClear = useCallback(
    (type?: string) => () => {
      if (type === RegisterRequestParams.EMAIL) setEmail("");
      if (type === RegisterRequestParams.PASSWORD) setPassword("");
      return setConfirm("");
    },
    [],
  );

  const handleRegister = () => {};

  return {
    email,
    password,
    confirm,
    onChangeText,
    onClear,
    isLoading,
    handleRegister,
  };
};
