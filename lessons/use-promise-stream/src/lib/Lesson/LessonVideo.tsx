"use client";

import Link from "next/link";
import Image from "next/image";
import { Lesson } from "../api";
import { use } from 'react';

export function LessonVideo(props: { lesson: Promise<Lesson> }) {
  const { video } = use(props.lesson);

  return (
    <Link href={video.url} target="_blank">
      <Image alt="video" src={video.thumbnail} className="w-full" />
    </Link>
  );
}
