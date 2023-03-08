/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DropdownMessageHolder } from "@helpers";
import { RootNavigator, RootStackParamList } from "@navigation";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { CGlobalStyles } from "@shared";
import React from "react";
import { Platform, StatusBar, UIManager, View } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
import ErrorBoundary from "react-native-error-boundary";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { AppErrorBoundary } from "./AppErrorBoundary";
import { store } from "./redux/store";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AwesomeApp = () => {
  const navigationRef = createNavigationContainerRef<RootStackParamList>();

  return (
    <View style={CGlobalStyles.appContent}>
      <StatusBar />
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
      <DropdownAlert
        ref={ref => {
          if (ref) {
            DropdownMessageHolder.setDropDown(ref);
          }
        }}
        closeInterval={2000}
        updateStatusBar={Platform.OS === "ios"}
      />
    </View>
  );
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={AppErrorBoundary}>
      <Provider store={store}>
        <SafeAreaProvider>
          <AwesomeApp />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
