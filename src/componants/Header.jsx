import "./Header.css";
import { useState } from "react";
// import { FcTodoList } from "react-icons/fc";

export const Header = ({ onAddTodos }) => {
  const [inputValue, setInputValue] = useState("");

  // clickHandler

  const clickHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onAddTodos(inputValue);
      setInputValue(""); // Clear input after adding todo
    }
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Todo Application</h1>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter todos..."
              className="todo-input"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit" onClick={clickHandler}>
              Add
            </button>
          </form>
        </div>
      </header>
    </>
  );
};
