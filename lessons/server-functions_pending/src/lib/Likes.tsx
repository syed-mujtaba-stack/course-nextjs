"use client";

import { useState, useTransition } from "react";
import { incrementLikes } from "./functions";

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
