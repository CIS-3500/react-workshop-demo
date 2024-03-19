import React from "react";
import "./Components.css";

const TodoItem = (props) => {
  const { completed, key, title, onDelete, onComplete } = props;

  return (
    <li className="todo-item" key={key}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onComplete()}
      />
      <span>{title}</span>
      <button className="todo-delete" onClick={() => onDelete()}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
