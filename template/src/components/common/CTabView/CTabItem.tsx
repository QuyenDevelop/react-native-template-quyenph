import { FunctionComponent } from "react";
import { ITabBarItem, ITabItemProps } from "@phamquyen/rn-core-components";
import { CIcon } from "../CIcons";

interface CTabBarItemProps extends ITabItemProps {
  tabItemIconName?: string;
}

export const CTabBarItem: FunctionComponent<CTabBarItemProps> = props => {
  const { tabItemIconName, ...arg } = props;
  return (
    <ITabBarItem
      {...arg}
      renderTabIcon={tabItemIconName ? <CIcon name={tabItemIconName} /> : null}
    />
  );
};
