import { FunctionComponent } from "react";
import { ITooltip, IToolTipProps } from "@janbox/rn-core-ui";

interface CTooltipProps extends IToolTipProps {}

export const CTooltip: FunctionComponent<CTooltipProps> = props => {
  const { ...arg } = props;
  return <ITooltip {...arg} />;
};
