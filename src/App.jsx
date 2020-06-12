import React, { useState } from 'react';

import Todo from './pages/Todo';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(0);

  const handleChangeInput = ({ target: { value } }) => {
    setInput(value);
  };

  const handleClickRemoveTodo = (id) => {
    setTodoList(
      todoList.filter((item) => item.id !== id),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodoList([
        ...todoList,
        {
          id: nextId,
          text: input,
        },
      ]);
      setInput('');
      setNextId(nextId + 1);
    }
  };

  return (
    <Todo
      todoList={todoList}
      input={input}
      handleChangeInput={handleChangeInput}
      handleClickRemoveTodo={handleClickRemoveTodo}
      handleSubmit={handleSubmit}
    />
  );
}
