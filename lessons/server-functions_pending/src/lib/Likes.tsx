"use client";

import { useState } from "react";
import { incrementLikes } from "./functions";
import { useTransition } from "react";

export function Likes({ initial }: { initial: number }) {
  const [isPending, startTransition] = useTransition();
  const [likeCount, setLikeCount] = useState(initial);

  const onClickUp = () => {
    startTransition(async () => {
      setLikeCount(await incrementLikes());
    });
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClickUp} disabled={isPending}>
        {isPending ? "⏳" : "👍"}
      </button>
    </>
  );
}
