import { Spinner } from "./Spinner";

export const Loading = () => {
  return (
    <div
      className={`bg-gray-600 animate-pulse justify-center items-center flex flex-1`}
    >
      <Spinner />
    </div>
  );
};
