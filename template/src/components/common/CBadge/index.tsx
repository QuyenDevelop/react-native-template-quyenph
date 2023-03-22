import { FunctionComponent } from "react";
import { IBadge, BadgeProps } from "@janbox/rn-core-ui";

interface CBadgeProps extends BadgeProps {}

export const CBadge: FunctionComponent<CBadgeProps> = props => {
  const { ...arg } = props;
  return <IBadge {...arg} />;
};
