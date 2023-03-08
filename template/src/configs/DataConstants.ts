import { CONSTANT } from "./Constants";

const languageCodes = [
  { code: "vi", tag: "vi-VN" },
  { code: "en", tag: "en-US" },
  { code: "ja", tag: "ja-JP" },
  { code: "cn", tag: "zh-CN" },
  { code: "tw", tag: "zh-TW" },
];

const language = [
  { label: "Tiếng Việt", value: "vi-VN" },
  { label: "English", value: "en-US" },
  { label: "日本語", value: "ja-JP" },
  { label: "中国", value: "zh-CN" },
  { label: "台灣", value: "zh-TW" },
];

const errorCodesApi = [
  {
    value: CONSTANT.ERROR_CODE.ERROR_SERVER,
    message: "error.errorServer",
  },
];

export const DATA_CONSTANT = {
  LANGUAGE_CODE: languageCodes,
  LANGUAGE: language,
  ERROR_CODE_API: errorCodesApi,
};
