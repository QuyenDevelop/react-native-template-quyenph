import { FunctionComponent } from "react";
import { IPlaceHolder, PlaceHolderProps } from "@janbox/rn-core-ui";

interface CPlaceHolderProps extends PlaceHolderProps {}

export const CPlaceHolder: FunctionComponent<CPlaceHolderProps> = props => {
  const { ...arg } = props;
  return <IPlaceHolder {...arg} />;
};
