import React from "react";
import ReactDOM from "react-dom";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsest from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsest />
      <TodoList />
    </TodoTemplate>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
