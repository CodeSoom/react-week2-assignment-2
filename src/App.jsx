import React, { useState } from 'react';
import Page from './page/Page';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(sentence) {
    const todoObject = {
      id: Math.random().toString(16).slice(-4),
      sentence,
    };
    setTodos([...todos, todoObject]);
  }

  function deleteTodo(passedKey) {
    setTodos(todos.filter((i) => (i.id !== passedKey)));
  }

  return (
    <div>
      <Page todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
