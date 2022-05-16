import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  function addTodo(value) {
    const temp = {
      id: nextId.current,
      value,
    };
    setTodos(todos.concat(temp));
    nextId.current += 1;
  }

  function removeTodo(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
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
