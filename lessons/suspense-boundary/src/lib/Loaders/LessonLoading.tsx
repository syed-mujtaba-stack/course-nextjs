import { Spinner } from "./Spinner";

export const LessonLoading = () => {
  return (
    <div
      className={`bg-gray-600 animate-pulse justify-center items-center flex flex-1`}
    >
      <Spinner />
    </div>
  );
};
