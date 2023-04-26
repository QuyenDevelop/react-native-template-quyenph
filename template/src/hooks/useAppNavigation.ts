import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { Platform } from "react-native";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export function useAppNavigation<T extends ParamListBase>() {
  return Platform.OS === "android"
    ? useNavigation<StackNavigationProp<T>>()
    : useNavigation<NativeStackNavigationProp<T>>();
}
