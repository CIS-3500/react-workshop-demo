import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoItem from "./components/TodoItem";

function App() {
  // The state of the todo items.
  const [todoItems, setTodoItems] = useState([
    {
      key: 0,
      completed: false,
      title: "Do the laundry",
    },
  ]);

  // functions to delete, complete, and add todo items.
  const deleteTodo = (key) => {
    const newTodoItems = todoItems.filter((item) => item.key !== key);
    setTodoItems(newTodoItems);
  };

  const completeTodo = (key) => {
    const newTodoItems = todoItems.map((item) => {
      if (item.key === key) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoItems(newTodoItems);
  };

  const addTodo = (title) => {
    const key = Date.now();
    // TODO: Implement addTodo
  };

  // The main app component
  return (
    <div className="App">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <div className="body-container">
        {/*TODO: Implement TodoContainer and TodoItem*/}
      </div>
    </div>
  );
}

export default App;
