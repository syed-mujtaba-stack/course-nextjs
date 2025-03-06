import { Spinner } from "./Spinner";

export function TableOfContentsLoading() {
  return (
    <div className={`w-[569px] bg-gray-700 h-full h-min-vh animate-pulse`}>
      <Spinner />
    </div>
  );
}
