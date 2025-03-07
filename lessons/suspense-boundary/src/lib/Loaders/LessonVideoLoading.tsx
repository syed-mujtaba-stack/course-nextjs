import { Spinner } from "./Spinner";

export const LessonVideoLoading = () => {
  return (
    <div
      className={`bg-black aspect-video animate-pulse justify-center items-center flex`}
    >
      <Spinner />
    </div>
  );
};
