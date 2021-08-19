import React, { useState } from "react";

import Page from "./components/Page";

// id를 효율적으로 다루려면 어떻게 하면 될까...
// 전에 지나가면서 uuid를 본적 잇는데 그걸로 가능한가

export default function App() {
  const [state, setState] = useState({
    todo: "",
    todos: []
  });

  const { todo, todos } = state;

  const handleInput = e => {
    setState({
      todo: e.target.value,
      todos: [...todos]
    });
  };

  const handleClickAdd = () => {
    setState({
      todo: "",
      todos: [
        ...todos,
        {
          id: Date.now(),
          content: todo
        }
      ]
    });
  };

  const handleDelete = id => {
    setState({
      todo,
      todos: todos.filter(text => text.id !== id)
    });
  };

  return (
    <div>
      <Page
        todo={todo}
        todos={todos}
        handleInput={handleInput}
        handleClickAdd={handleClickAdd}
        handleDelete={handleDelete}
      />
    </div>
  );
}
