import { FunctionComponent } from "react";
import { ILineSkeleton, ISkeletonProps } from "@janbox/rn-core-ui";

interface CLineSkeletonProps extends ISkeletonProps {}

export const CLineSkeleton: FunctionComponent<CLineSkeletonProps> = props => {
  const { ...arg } = props;
  return <ILineSkeleton {...arg} />;
};
