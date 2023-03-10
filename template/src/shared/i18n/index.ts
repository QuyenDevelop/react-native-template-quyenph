import { CONSTANT } from "@configs";
import i18n from "i18n-js";
import en from "./locales/en";
import ja from "./locales/ja";
import vi from "./locales/vi";
import { AsyncStorage } from "@helpers";

i18n.defaultLocale = CONSTANT.LANGUAGES.EN;
i18n.locale = CONSTANT.LANGUAGES.EN;
i18n.fallbacks = true;
i18n.translations = { en, vi, ja };
let initialized = false;

export var currentLanguage = CONSTANT.LANGUAGES.VI;

export const onChangeLanguage = async (language: string) => {
  switch (language) {
    case CONSTANT.LANGUAGES.VI: {
      await AsyncStorage.setAsyncItem("language", language);
      currentLanguage = language;
      i18n.defaultLocale = language;
      i18n.locale = language;
      break;
    }
    case CONSTANT.LANGUAGES.EN: {
      await AsyncStorage.setAsyncItem("language", language);
      currentLanguage = language;
      i18n.defaultLocale = language;
      i18n.locale = language;
      break;
    }
    case CONSTANT.LANGUAGES.JA: {
      await AsyncStorage.setAsyncItem("language", language);
      currentLanguage = language;
      i18n.defaultLocale = language;
      i18n.locale = language;
      break;
    }
    default:
  }
};

const init = async () => {
  const setDefaultLanguage = () => {
    i18n.defaultLocale = CONSTANT.LANGUAGES.VI;
    i18n.locale = CONSTANT.LANGUAGES.VI;
  };
  try {
    const language = await AsyncStorage.getAsyncItem("language");
    if (language) {
      i18n.defaultLocale = language;
      i18n.locale = language;
    } else {
      setDefaultLanguage();
    }
  } catch {
    setDefaultLanguage();
  }
};

export const translate = (first: any, ...params: any[]) => {
  if (!initialized) {
    init();
    initialized = true;
  }
  return i18n.t(first, ...params);
};
