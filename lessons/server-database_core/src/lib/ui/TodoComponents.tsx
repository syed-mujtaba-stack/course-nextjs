"use client";

import { useState } from "react";
import { addTodo, deleteTodoById, Todo, updateTodoCompletedById } from "../db";

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
  const [newTodoMessage, setNewTodoMessage] = useState("");

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

  const onAddTodo = async () => {
    const message = newTodoMessage.trim();
    if (!message) return;
    setNewTodoMessage("");
    const todo = await addTodo(message);
    setTodos((todos) => [...todos, todo]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodoMessage}
          onChange={(e) => setNewTodoMessage(e.target.value)}
          placeholder="todo..."
        />
        <button onClick={onAddTodo}>Add</button>
      </div>
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
