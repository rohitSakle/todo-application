import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { List } from "./List";
import "./TodoContainer.css";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todoText) => {
    setTodos([...todos, todoText]);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const deleteHandler = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Header onAddTodos={addTodos} />
      <List list={todos} onDelete={deleteHandler} />
      <Footer onClear={clearTodos} />
    </div>
  );
};
