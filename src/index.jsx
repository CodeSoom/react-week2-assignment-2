import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);


  return (
    <>
      <Title />
      <TodoForm
        setTodos={setTodos}
      />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
