import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react/cjs/react.development';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(todo) {
    setTodos(todos.filter((item) => item !== todo));
  }

  return (
    <>
      <h2>
        To-do
      </h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
