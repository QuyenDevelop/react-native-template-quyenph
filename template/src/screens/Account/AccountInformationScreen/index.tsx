import { CHeader } from "@components";
import { CGlobalStyles } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

export const AccountInformationScreen: FunctionComponent = () => {
  return (
    <View style={CGlobalStyles.appContent}>
      <CHeader title={"Account Info"} />
      <View style={CGlobalStyles.flexCenter}>
        <Text>AccountInformationScreen</Text>
      </View>
    </View>
  );
};
