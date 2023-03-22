import { FunctionComponent } from "react";
import { BaseDialog, DialogProps } from "@janbox/rn-core-ui";

interface CDialogProps extends DialogProps {}

export const CDialog: FunctionComponent<CDialogProps> = props => {
  const { ...arg } = props;
  return <BaseDialog {...arg} />;
};
