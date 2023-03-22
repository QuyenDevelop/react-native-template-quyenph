import { FunctionComponent } from "react";
import { ISquareSkeleton, ISkeletonProps } from "@janbox/rn-core-ui";

interface CSquareSkeletonProps extends ISkeletonProps {
  size: number;
}

export const CSquareSkeleton: FunctionComponent<
  CSquareSkeletonProps
> = props => {
  const { size, ...arg } = props;
  return <ISquareSkeleton size={size} {...arg} />;
};
