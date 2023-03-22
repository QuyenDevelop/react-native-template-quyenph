import { FunctionComponent } from "react";
import { ICheckBox, CheckBoxProps } from "@janbox/rn-core-ui";

interface CCheckBoxProps extends CheckBoxProps {}

export const CCheckBox: FunctionComponent<CCheckBoxProps> = props => {
  const { ...arg } = props;
  return <ICheckBox {...arg} />;
};
