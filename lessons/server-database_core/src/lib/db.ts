"use server";

import { neon } from "@neondatabase/serverless";

function getSql() {
  const sql = neon(process.env.DB_URL!);
  return sql;
}

export type Todo = {
  id: string;
  message: string;
  completed: boolean;
};

export async function getTodos() {
  const sql = getSql();
  const results = await sql`SELECT * FROM todos`;
  return results as Todo[];
}

export async function addTodo(message: string): Promise<Todo> {
  const sql = getSql();
  const result = await sql`
    INSERT INTO todos (message) 
    VALUES (${message}) 
    RETURNING id, message, completed
  `;
  return result[0] as Todo;
}

export async function updateTodo(id: string, completed: boolean) {
  const sql = getSql();
  await sql`
    UPDATE todos
    SET completed = ${completed}
    WHERE id = ${id}
  `;
}
