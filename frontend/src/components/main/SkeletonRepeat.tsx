import SkeletonCard from "../sub/Skeleton";

export default function SkeletonRepeat() {
  const repeatedskeleton = Array.from({ length: 6 });
  return (
    <div className=" w-[90%] sm:w-[60%] md:w-full container py-8 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
      {repeatedskeleton.map((_, index) => {
        return <SkeletonCard key={index} />;
      })}
    </div>
  );
}
