"use client";

import { useState } from "react";
import { deleteTodoById, Todo, updateTodoCompletedById } from "../db";

export const Todos = ({ initial }: { initial: Todo[] }) => {
  const [todos, setTodos] = useState(initial);

  const onTodoCheckboxClick = async (id: string, completed: boolean) => {
    await updateTodoCompletedById(id, completed);
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const onTodoDeleteClicked = async (id: string) => {
    await deleteTodoById(id);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onTodoCheckboxClick(todo.id, e.target.checked)}
            />
            <p>{todo.message}</p>
            <button onClick={() => onTodoDeleteClicked(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
