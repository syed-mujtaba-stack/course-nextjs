"use client";

import { ServerState, update } from "./functions";
import { useActionState } from "react";

export function Likes({ initial }: { initial: ServerState }) {
  const [state, action, isPending] = useActionState(update, initial);

  return (
    <div>
      <p>Total Likes: {state.likes} </p>
      <form action={action}>
        <button type="submit" disabled={isPending}>
          {isPending ? "⏳" : "👍"}
        </button>
      </form>
    </div>
  );
}
