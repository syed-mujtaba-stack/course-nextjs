"use client";

import { useState } from "react";
import { incrementLikes, resetLikes } from "./functions";

export function Likes({ initial }: { initial: number }) {
  const [likeCount, setLikeCount] = useState(initial);

  const onClickUp = async () => {
    const currentCount = await incrementLikes();
    setLikeCount(currentCount);
  };
  const onClickReset = async () => {
    const currentCount = await resetLikes();
    setLikeCount(currentCount);
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClickUp}>👍</button>
      <button onClick={onClickReset}>🔥</button>
    </>
  );
}
