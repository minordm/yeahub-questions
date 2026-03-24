import ContentLoader from "react-content-loader";

type TSkeletonProps = React.ComponentProps<typeof ContentLoader> & {
  borderRadius: number;
  widthSvg: number;
  heightSvg: number;
};

const Skeleton = ({
  borderRadius,
  widthSvg,
  heightSvg,
  ...props
}: TSkeletonProps) => (
  <ContentLoader
    speed={2}
    backgroundColor="#f4f4f4"
    foregroundColor="#6a0bff"
    {...props}
  >
    <rect
      x="0"
      y="0"
      rx={borderRadius}
      ry={borderRadius}
      width={widthSvg}
      height={heightSvg}
    />
  </ContentLoader>
);

export default Skeleton;
