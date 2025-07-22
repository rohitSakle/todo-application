import "./Footer.css";
import { List } from "./List";

export const Footer = ({ onClear }) => {
  const clearHandler = () => {
    onClear();
  };

  return (
    <>
      <footer className="footer">
        <button onClick={clearHandler}>clear</button>
      </footer>
    </>
  );
};
