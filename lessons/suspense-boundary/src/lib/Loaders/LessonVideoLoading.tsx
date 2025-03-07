import { Row } from "../Layout";

export const PlayIcon = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 330 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
   c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4
   C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"
      ></path>
    </svg>
  );
};

export const LessonVideoLoading = () => {
  return (
    <div
      className={`bg-black aspect-video animate-pulse justify-center items-center flex text-gray-400`}
    >
      <Row gap={16} vAlign="center">
        <PlayIcon size={48} />
        <h2 className="font-bold text-2xl">Loading Video</h2>
      </Row>
    </div>
  );
};
