"use client";

import styles from "./Components.module.css";
import { useState } from "react";
import {
  Todo,
  createTodo,
  deleteTodoById,
  updateTodoCompletedById,
} from "../db";

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
    <li className={styles.todoItem}>
      <div
        className={styles.todoContent}
        onClick={() => onUpdateCompleted(todo.id, !todo.completed)}>
        <input type="checkbox"
          checked={todo.completed}
          readOnly
          className={styles.checkbox}
        />
        <p className={`${styles.todoText} ${todo.completed ? styles.completed : ""}`}>
          {todo.message}
        </p>
      </div>
      <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>
        ❌
      </button>
    </li>
  );
};

export const DisplayTodos = ({ initial }: { initial: Todo[] }) => {
  const [todos, setTodos] = useState(initial);
  const [newTodoMessage, setNewTodoMessage] = useState("");

  const onCreateTodo = async () => {
    const message = newTodoMessage.trim();
    if (!message) return;
    setNewTodoMessage("");
    const todo = await createTodo(message);
    setTodos((todos) => [...todos, todo]);
  };

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
    <div className={styles.container}>
      <form action={onCreateTodo} className={styles.form}>
        <input
          type="text"
          value={newTodoMessage}
          onChange={(e) => setNewTodoMessage(e.target.value)}
          placeholder="Todo..."
          className={styles.input}
        />
        <button className={styles.createButton}>Create</button>
      </form>
      <hr className={styles.divider} />
      <ul className={styles.todoList}>
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
