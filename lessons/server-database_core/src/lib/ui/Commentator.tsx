"use client";

import { Comment } from "../db";

function DisplaySubmittedAt({ submitted_at }: { submitted_at: Date }) {
  return <p>{submitted_at.toISOString()}</p>;
}

export const Commentator = ({ initial }: { initial: Comment[] }) => {
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {initial.map((comment) => (
          <li key={comment.comment_id}>
            <p>{comment.message}</p>
            <DisplaySubmittedAt submitted_at={comment.submitted_at} />
          </li>
        ))}
      </ul>
    </div>
  );
};
