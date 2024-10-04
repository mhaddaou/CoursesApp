import {Card, Skeleton} from "@nextui-org/react";

export default function SkeletonCard() {
  return (
    <Card className="w-[90%] space-y-5 p-4 relative pb-12 my-4 rounded-lg bg-white" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-40 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg    pt-4">  
          <div className="h-9 w-1/3 absolute right-0 rounded-lg bg-default-300 "></div>
        </Skeleton>
      </div>
    </Card>
  );
}