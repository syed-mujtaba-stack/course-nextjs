"use client";

import Link from "next/link";
import Image from "next/image";
import { Lesson } from "../api";

export function LessonVideo(props: { lesson: Lesson }) {
  const { video } = props.lesson;

  return (
    <Link href={video.url} target="_blank">
      <Image alt="video" src={video.thumbnail} className="w-full" />
    </Link>
  );
}
