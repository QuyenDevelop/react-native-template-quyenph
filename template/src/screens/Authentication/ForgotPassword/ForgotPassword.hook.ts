import { useAppNavigation, useBoolean } from "@hooks";
import { useCallback, useState } from "react";

export const useForgotPasswordScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>("");
  const [isLoading, showLoading, hideLoading] = useBoolean(false);

  const handleForgotPassword = useCallback(() => {
    // ---- logic forgot password
  }, []);

  return {
    email,
    setEmail,
    isLoading,
    handleForgotPassword,
  };
};
