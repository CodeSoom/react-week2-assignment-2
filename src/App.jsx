import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleClickCheckTodo = (id) => {
    todos.find((todo) => todo.id === id).done = !todos.find((todo) => todo.id === id).done;
    setTodos([...todos]);
  };

  const handleChangeValue = (targetValue) => {
    setValue(targetValue);
  };

  const handleClickAddTodo = (e) => {
    if (!value.trim()) {
      return;
    }

    if (e.key && e.key !== 'Enter') {
      return;
    }

    setTodos([...todos, {
      id: +(new Date()),
      content: value,
      done: false,
    }]);

    setValue('');
  };

  const handleClickDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Page
      todos={todos}
      value={value}
      onChangeValue={handleChangeValue}
      onClickAddTodo={handleClickAddTodo}
      onClickDeleteTodo={handleClickDeleteTodo}
      onClickCheckTodo={handleClickCheckTodo}
    />
  );
}
