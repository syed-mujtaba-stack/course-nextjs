'use server';

import { neon } from "@neondatabase/serverless";

function getSql() {
  const sql = neon(process.env.DB_URL!);
  return sql;
}

export type Comment = {
  comment_id: string;
  message: string;
  submitted_at: Date;
};

export async function getComments() {
  const sql = getSql();
  const results = await sql`SELECT * FROM comments ORDER BY submitted_at DESC`;
  return results as Comment[];
}

export async function addComment(message: string): Promise<Comment> {
  const sql = getSql();
  const result = await sql`
    INSERT INTO comments (message) 
    VALUES (${message}) 
    RETURNING comment_id
  `;
  return {
    comment_id: result[0].comment_id as string,
    message,
    submitted_at: new Date(),
  };
}
