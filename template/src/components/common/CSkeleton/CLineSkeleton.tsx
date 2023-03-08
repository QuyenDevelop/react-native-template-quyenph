import { FunctionComponent } from "react";
import { ILineSkeleton, ISkeletonProps } from "@phamquyen/rn-core-components";

interface CLineSkeletonProps extends ISkeletonProps {}

export const CLineSkeleton: FunctionComponent<CLineSkeletonProps> = props => {
  const { ...arg } = props;
  return <ILineSkeleton {...arg} />;
};
