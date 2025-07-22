import "./List.css";
import { FaUserCheck } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import { useState } from "react";

export const List = ({ list, onDelete }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const clickCheckHandler = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <section className="todo-list-section">
        <ul className="todo-list">
          {list.map((item, index) => {
            return (
              <li key={index} className="todo-items">
                {item}
                <span className="todo-icons">
                  <FaUserCheck
                    style={{
                      color: checkedItems.includes(index) ? "green" : "black",
                      cursor: "pointer",
                    }}
                    onClick={() => clickCheckHandler(index)}
                  />
                  <TiUserDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(index)}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
