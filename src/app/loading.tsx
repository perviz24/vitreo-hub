import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-8">
      <Skeleton className="h-8 w-48" />
      <div className="flex gap-4">
        <Skeleton className="h-32 w-64" />
        <Skeleton className="h-32 w-64" />
        <Skeleton className="h-32 w-64" />
      </div>
    </div>
  );
}
