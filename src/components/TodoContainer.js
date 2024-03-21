import "./Components.css";
import React from "react";

const TodoContainer = (props) => {
  let { name, addTodo } = props;
  return (
    <div className="todo-container">
      <h2 className="todo-title">{name}</h2>
      <input
        type="text"
        placeholder="Add a todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul className="todo-list">{props.children}</ul>
    </div>
  );
};

export default TodoContainer;
