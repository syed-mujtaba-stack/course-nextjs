"use client";

import { useState } from "react";
import { deleteTodoById, Todo, updateTodoCompletedById } from "../db";

const DisplayTodo = ({
  todo,
  onUpdateCompleted,
  onDelete,
}: {
  todo: Todo;
  onUpdateCompleted: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onUpdateCompleted(todo.id, e.target.checked)}
      />
      <p>{todo.message}</p>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
};

export const DisplayTodos = ({ initial }: { initial: Todo[] }) => {
  const [todos, setTodos] = useState(initial);

  const onUpdateCompleted = async (id: string, completed: boolean) => {
    await updateTodoCompletedById(id, completed);
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const onDelete = async (id: string) => {
    await deleteTodoById(id);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <DisplayTodo
            key={todo.id}
            todo={todo}
            onUpdateCompleted={onUpdateCompleted}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
