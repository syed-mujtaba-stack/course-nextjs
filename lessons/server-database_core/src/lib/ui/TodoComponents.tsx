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
    <li className="flex items-center justify-between p-2 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onUpdateCompleted(todo.id, e.target.checked)}
          className="w-4 h-4"
        />
        <p className={`text-sm ${todo.completed ? "line-through text-gray-500" : ""}`}>
          {todo.message}
        </p>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
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
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodoMessage}
          onChange={(e) => setNewTodoMessage(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
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
