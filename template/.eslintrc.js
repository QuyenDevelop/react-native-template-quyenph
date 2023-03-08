module.exports = {
  root: true,
  extends: ["@react-native-community"],
  plugins: ["react-hooks"],
  parser: "@babel/eslint-parser",
  requireConfigFile: false,
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    quotes: [2, "double"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
