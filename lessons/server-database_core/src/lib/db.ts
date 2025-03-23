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
  created_at: Date;
};

export async function getTodos() {
  const sql = getSql();
  const results = await sql`SELECT * FROM todos ORDER BY created_at ASC`;
  return results as Todo[];
}

export async function createTodo(message: string): Promise<Todo> {
  const sql = getSql();
  const result = await sql`
    INSERT INTO todos (message)
    VALUES (${message})
    RETURNING *
  `;
  return result[0] as Todo;
}

export async function updateTodoCompletedById(id: string, completed: boolean) {
  const sql = getSql();
  await sql`
    UPDATE todos
    SET completed = ${completed}
    WHERE id = ${id}
  `;
}

export async function deleteTodoById(id: string) {
  const sql = getSql();
  await sql`DELETE FROM todos WHERE id = ${id}`;
}
