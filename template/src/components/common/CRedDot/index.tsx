import { FunctionComponent } from "react";
import { IDot, DotProps } from "@janbox/rn-core-ui";

interface CRedDotProps extends DotProps {}

export const CRedDot: FunctionComponent<CRedDotProps> = props => {
  const { ...arg } = props;
  return <IDot {...arg} />;
};
