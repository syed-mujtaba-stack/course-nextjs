"use client";

import { useState } from "react";
import { incrementLikes, resetLikes } from "./functions";

export function Likes({
  initial,
  decrementLikes,
}: {
  initial: number;
  decrementLikes: () => Promise<number>;
}) {
  const [likeCount, setLikeCount] = useState(initial);

  const onClickUp = async () => {
    setLikeCount(await incrementLikes());
  };
  const onClickReset = async () => {
    setLikeCount(await resetLikes());
  };
  const onClickDown = async () => {
    setLikeCount(await decrementLikes());
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClickUp}>👍</button>
      <button onClick={onClickReset}>🔥</button>
      <button onClick={onClickDown}>👎</button>
    </>
  );
}
