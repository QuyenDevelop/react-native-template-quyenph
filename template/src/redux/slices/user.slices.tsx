import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { IRootUserState } from "../types";
import { SliceName } from "./constants";
import { Account, loginInternalPayload } from "@models";

const initialState: IRootUserState = {
  isLogging: null,
  profile: null,
  language: null,
  anonymousId: null,
  deviceId: null,
  tokenId: null,
};

export const userSlice = createSlice({
  name: SliceName.USER_SLICE,
  initialState,
  reducers: {
    changeLanguageSuccess: (
      state: IRootUserState,
      action: PayloadAction<string>,
    ) => {
      state.language = action.payload;
    },
    loginStatus: (state: IRootUserState, action: PayloadAction<boolean>) => {
      state.isLogging = action.payload;
    },
    getUserInfo: (state: IRootUserState, action: PayloadAction<Account>) => {
      state.profile = action.payload;
      state.anonymousId = action.payload?.sub || "";
    },
    setAnonymousId: (state: IRootUserState, action: PayloadAction<string>) => {
      state.anonymousId = action.payload;
    },
    logoutAction: (state: IRootUserState) => {
      state.isLogging = false;
      state.tokenId = null;
      state.profile = null;
    },
  },
});

export const asyncChangeLanguage = createAction<string>(
  `${SliceName.USER_SLICE}/asyncChangeLanguage`,
);

export const asyncSetAnonymousId = createAction<string | number[]>(
  `${SliceName.USER_SLICE}/setAnonymousId`,
);

export const asyncLoginAction = createAction<loginInternalPayload>(
  `${SliceName.USER_SLICE}/login`,
);

export const asyncUserInfoAction = createAction(
  `${SliceName.USER_SLICE}/getUserAction`,
);

export const { changeLanguageSuccess, getUserInfo, loginStatus, logoutAction } =
  userSlice.actions;

// reducer
export const userReducer = userSlice.reducer;
