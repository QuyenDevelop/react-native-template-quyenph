import { authApi } from "@api";
import { CONSTANT, SCREENS } from "@configs";
import { Alert, AsyncStorage, Utils, navigationRef } from "@helpers";
import { Account, AuthorizeResult, loginInternalPayload } from "@models";
import { PayloadAction } from "@reduxjs/toolkit";
import { onChangeLanguage, translate } from "@shared";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  asyncChangeLanguage,
  asyncLoginAction,
  changeLanguageSuccess,
  asyncUserInfoAction,
  getUserInfo,
  loginStatus,
  logoutAction,
} from "../slices";

// ----- region change language
function* takeChangeLanguage(action: PayloadAction<string>) {
  try {
    yield call(onChangeLanguage, action.payload);
    yield put(changeLanguageSuccess(action.payload));
  } catch (error) {}
}

// ----- region getUserInfo
function* takeUserInfo() {
  try {
    const response: Account = yield call(authApi.getUserInfo);
    if (response) {
      yield put(getUserInfo(response));
    }
  } catch (error) {}
}

// ----- region Login
function* takeLogin(action: PayloadAction<loginInternalPayload>) {
  const { username, password } = action.payload;
  try {
    if (username && password) {
      const response: AuthorizeResult = yield call(
        authApi.login,
        username,
        password,
      );
      if (response) {
        yield call(takeUserInfo);
        yield navigationRef.navigate(SCREENS.ACCOUNT_STACK, {
          screen: SCREENS.ACCOUNT_INFORMATION_SCREEN,
        });
        yield Utils.storeTokenResponse(response);
      }
    } else {
      Alert.error(translate("textWarningUserAndPass"));
    }
  } catch (error: any) {
    if (error?.locked) {
      // yield put(loginFailure(error.error_description));
    }
    Alert.error(error.error_description, true);
  }
}

// ----- region Logout
function* takeLogout() {
  try {
    yield put(loginStatus(false));
    async function handlerLogout() {
      const [accessToken, refreshToken] = await Promise.all([
        AsyncStorage.getAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
        AsyncStorage.getAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
      ]);
      await Promise.all([
        authApi.revokeToken(accessToken),
        authApi.revokeToken(refreshToken),
      ]);
      await Promise.all([
        AsyncStorage.removeAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
        AsyncStorage.removeAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
      ]);
      // GoogleSignin.configure({
      //   webClientId: GOOGLE_CLIENT_ID,
      //   offlineAccess: true,
      // });
      // await GoogleSignin.signOut();
      // LoginManager.logOut();
    }

    yield call(handlerLogout);
  } catch (error) {}
}

export default function* userSaga() {
  yield all([
    takeLatest(asyncChangeLanguage, takeChangeLanguage),
    takeLatest(asyncUserInfoAction, takeUserInfo),
    takeLatest(asyncLoginAction, takeLogin),
    takeLatest(logoutAction, takeLogout),
  ]);
}
