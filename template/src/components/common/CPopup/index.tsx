import { FunctionComponent } from "react";
import { BasePopup, PopupProps } from "@janbox/rn-core-ui";

interface CPopupProps extends PopupProps {}

export const CPopup: FunctionComponent<CPopupProps> = props => {
  const { ...arg } = props;
  return <BasePopup {...arg} />;
};
