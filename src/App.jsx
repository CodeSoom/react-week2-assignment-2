import React, { useState } from 'react';
import Page from './components/Page';
import Todos from './components/domain/Todos';

export default function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState(Todos.EMPTY());

  const handleClickAdd = () => {
    setTodos(todos.pushTitle(title));
    setTitle('');
  };

  const handleChange = ({ target: { value } }) => {
    setTitle(value);
  };

  /** @param todo {Todo} */
  const handleClickComplete = (todo) => {
    todo.complete();
    setTodos(todos.copy());
  };

  return (
    <Page
      title={title}
      onChange={handleChange}
      todos={todos}
      onClickAdd={handleClickAdd}
      onClickComplete={handleClickComplete}
    />
  );
}
