import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './todoForm';
import TodoList from './todoList';

function App() {
  const [todo, setTodo] = useState('');
  const [array, setArray] = useState([]);

  function handleChange(event) {
    const { target: { value } } = event;

    setTodo(value);
  }

  function handleClickAdd() {
    setArray([...array, todo]);
    setTodo('');
  }

  function handleClickDone(item) {
    setArray(array.filter((it) => it !== item));
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleClickAdd={handleClickAdd}
      />
      <TodoList
        array={array}
        handleClickDone={handleClickDone}
      />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
