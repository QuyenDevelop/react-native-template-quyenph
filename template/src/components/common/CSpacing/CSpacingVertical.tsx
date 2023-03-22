import { FunctionComponent } from "react";
import { ISpacingVertical } from "@janbox/rn-core-ui";
import { CSpacingProps } from "./CSpacingHorizontal";

export const CSpacingVertical: FunctionComponent<CSpacingProps> = props => {
  const { ...arg } = props;
  return <ISpacingVertical {...arg} />;
};
