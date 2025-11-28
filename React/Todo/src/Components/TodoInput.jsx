import React from "react";
import { TodoList } from "./TodoList";

export const TodoInput = () => {
  const [textValue, setTextValue] = React.useState("");
  const [dataBase, setDataBase] = React.useState([]);

  const handleTodos = () => {
    if (textValue.trim() == "") return;

    const todoData = {
      id: Date.now(),
      todo: textValue.trim(),
      isEdits: false,
      isCompletes: false,
    };
    setDataBase((current) => [...current, todoData]);
  };

  // console.log("dataBase", dataBase);
  return (
    <>
      <h1>TODO crud</h1>
      <input
        type="text"
        placeholder="Enter your task..."
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button onClick={handleTodos} className="btn">add</button>
      <TodoList props={{ dataBase, setDataBase }} />
    </>
  );
};
