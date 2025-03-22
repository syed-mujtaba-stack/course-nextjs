"use client";

import { Comment } from "../db";

function DisplaySubmittedAt({ submitted_at }: { submitted_at: Date }) {
  return (
    <p className="text-xs p-1 bg-gray-700 text-white rounded-md">
      {submitted_at.getFullYear()}/{submitted_at.getMonth() + 1}
    </p>
  );
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
