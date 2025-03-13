"use client";

import { useState } from "react";
import { incrementLikes } from "./functions";

export function Likes({ initial }: { initial: number }) {
  const [likeCount, setLikeCount] = useState(initial);

  const onClick = async () => {
    const currentCount = await incrementLikes();
    setLikeCount(currentCount);
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClick}>👍</button>
    </>
  );
}
