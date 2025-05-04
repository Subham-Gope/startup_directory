import { Skeleton } from "./ui/skeleton";

const StartupCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((el: number, index: number) => (
        <li key={`skeleton-${index}`}>
          <Skeleton className="startup-card_skeleton" />
        </li>
      ))}
    </>
  );
};

export default StartupCardSkeleton;
