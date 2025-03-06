import Link from "next/link";
import { fetchVideo } from "./api";
import Image from "next/image";

export const LessonVideo = async () => {
  const video = await fetchVideo();

  return (
    <Link href={video.url} target="_blank">
      <Image alt="video" src={video.thumbnail} className="w-full" />
    </Link>
  );
};
