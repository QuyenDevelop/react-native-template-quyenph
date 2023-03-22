import { FunctionComponent } from "react";
import { IRadioCheckBox, CheckBoxProps } from "@janbox/rn-core-ui";

interface CRadioCheckProps extends CheckBoxProps {}

export const CRadioCheck: FunctionComponent<CRadioCheckProps> = props => {
  const { ...arg } = props;
  return <IRadioCheckBox {...arg} />;
};
