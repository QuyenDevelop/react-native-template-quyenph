import { CHeader, CSearch, HeaderIcon } from "@components";
import { CONSTANT } from "@configs";
import { CGlobalStyles } from "@shared";
import React, { FunctionComponent } from "react";
import { View } from "react-native";

export const HomeAccountScreen: FunctionComponent = () => {
  const [text, setText] = React.useState("");

  const listIcon: HeaderIcon[] = [
    {
      name: "book",
      type: CONSTANT.ICON_TYPE.AntDesign,
    },
    {
      name: "close",
      type: CONSTANT.ICON_TYPE.AntDesign,
    },
  ];

  return (
    <View style={CGlobalStyles.container}>
      <CHeader title={"Account Screen"} iconRights={listIcon} />
      <View style={CGlobalStyles.flexCenter}>
        <CSearch
          value={text}
          onChangeText={setText}
          onClearInput={() => setText("")}
        />
      </View>
    </View>
  );
};
