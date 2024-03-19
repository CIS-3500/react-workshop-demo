import "./Components.css";
import React from "react";

const TodoContainer = (props) => {
  let { name } = props;
  return (
    <div className="todo-container">
      <h2 className="todo-title">{name}</h2>
      <ul className="todo-list">{props.children}</ul>
    </div>
  );
};

export default TodoContainer;
