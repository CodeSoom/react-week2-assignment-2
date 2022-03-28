import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Message from './components/Message';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Title />
      <TodoForm setTodos={setTodos} />
      {todos.length > 0 ? (
        <Todos todos={todos} setTodos={setTodos} />
      ) : (
        <Message />
      )}
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
