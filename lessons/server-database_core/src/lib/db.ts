import { neon } from "@neondatabase/serverless";

function getSql() {
  const sql = neon(process.env.DB_URL!);
  return sql;
}

export async function getComments() {
  const sql = getSql();
  const items = await sql`SELECT * FROM comments ORDER BY submitted_at DESC`;
  return items;
}
