import { Spinner } from "./Spinner";

export function TableOfContentsLoading() {
  return (
    <div
      className={`w-[569px] bg-gray-700 h-full animate-pulse justify-center items-center flex`}
    >
      <Spinner />
    </div>
  );
}
