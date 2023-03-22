import { FunctionComponent } from "react";
import { EmptyStateProps, IEmptyState } from "@janbox/rn-core-ui";

interface CEmptyStateProps extends EmptyStateProps {}

export const CEmptyState: FunctionComponent<CEmptyStateProps> = props => {
  const { ...arg } = props;
  return <IEmptyState {...arg} />;
};
