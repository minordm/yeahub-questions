import Skeleton from "@shared/ui/Skeleton/Skeleton";

export const createSkeleton = (
  item: number,
  height: number,
  width: number,
  raduis: number = 12,
) => {
  return [...new Array(item)].map((_, index) => (
    <Skeleton
      borderRadius={raduis}
      heightSvg={height}
      widthSvg={width}
      width={width}
      height={height}
      key={index}
    />
  ));
};
