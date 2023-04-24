import {
  // RouteProp,
  // CommonActions,
  createNavigationContainerRef,
  ParamListBase,
} from "@react-navigation/core";
import { CommonActions, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

export const navigationRef = createNavigationContainerRef<any>();

export function navigate<T extends object>(name: string, params?: T) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef.current.goBack();
  }
}

export const replaceScreen = (
  replaces: string[],
  newScreen: RouteProp<any>,
) => {
  navigationRef.dispatch(state => {
    const newRoutes = state.routes.filter(
      route => !replaces.includes(route.name),
    );
    newRoutes.push(newScreen);
    return CommonActions.reset({
      ...state,
      routes: newRoutes,
      index: newRoutes.length - 1,
    });
  });
};

export function createNavigation<ParamList extends ParamListBase>() {
  return Platform.OS === "android"
    ? createNativeStackNavigator<ParamList>()
    : createStackNavigator<ParamList>();
}
