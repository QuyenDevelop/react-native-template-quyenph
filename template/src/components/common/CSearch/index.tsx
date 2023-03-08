import { FunctionComponent } from "react";
import { BaseSearch, SearchProps } from "@phamquyen/rn-core-components";
import { CIcon } from "../CIcons";
import { TouchableOpacity } from "react-native";
import { CONSTANT } from "@configs";
import { CThemes } from "@shared";

interface CSearchProps extends SearchProps {}

export const CSearch: FunctionComponent<CSearchProps> = props => {
  const { ...arg } = props;
  return (
    <BaseSearch
      {...arg}
      clearTextIcon={
        <TouchableOpacity
          onPress={props.onClearInput}
          style={{
            width: CThemes.constantStyles.iconSizeSmall,
            height: CThemes.constantStyles.iconSizeSmall,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: CThemes.constantStyles.spacing8,
            borderRadius: CThemes.constantStyles.borderRadius8,
            backgroundColor: CThemes.colors.black2s,
          }}
        >
          <CIcon
            type={CONSTANT.ICON_TYPE.AntDesign}
            name={"close"}
            color={CThemes.colors.black5s}
          />
        </TouchableOpacity>
      }
    />
  );
};
