import { FunctionComponent } from "react";
import { FloatingButtonProps, IFloatingButton } from "@janbox/rn-core-ui";

interface CFloatingButtonProps extends FloatingButtonProps {}

export const CFloatingButton: FunctionComponent<
  CFloatingButtonProps
> = props => {
  const { ...arg } = props;
  return <IFloatingButton {...arg} />;
};
