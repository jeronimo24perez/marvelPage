interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-700/50 rounded-md ${className}`}
    />
  );
};

export default Skeleton;
