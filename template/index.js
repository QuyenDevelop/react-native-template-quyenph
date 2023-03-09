/**
 * @format
 */

import { AppRegistry, LogBox } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

const ignoreWarns = [
  //   "Setting a timer for a long period of time",
  //   "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation",
  "ViewPropTypes will be removed from React Native",
  //   "AsyncStorage has been extracted from react-native",
  //   "EventEmitter.removeListener",
];

LogBox.ignoreLogs(ignoreWarns);
console.reportErrorsAsExceptions = false;

AppRegistry.registerComponent(appName, () => App);
