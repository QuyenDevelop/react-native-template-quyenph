import { FunctionComponent } from "react";
import { ITabView, ITabsProps } from "@janbox/rn-core-ui";

interface CTabViewProps extends ITabsProps {}

export const CTabView: FunctionComponent<CTabViewProps> = props => {
  const { ...arg } = props;
  return <ITabView {...arg} />;
};
