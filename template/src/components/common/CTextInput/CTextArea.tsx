import { FunctionComponent } from "react";
import { BaseTextArea, ITextareaProps } from "@janbox/rn-core-ui";

interface CTextAreaProps extends ITextareaProps {}

export const CTextArea: FunctionComponent<CTextAreaProps> = props => {
  const { ...arg } = props;
  return <BaseTextArea {...arg} />;
};
