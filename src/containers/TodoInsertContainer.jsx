import React, { useState } from 'react';

import TodoInsert from '../components/TodoInsert';

function TodoInsertContainer({ onInsert }) {
  const [todo, setTodo] = useState('');

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(todo);
    setTodo('');
  };

  return (
    <TodoInsert onChange={handleOnChange} onSubmit={onSubmit} todo={todo} />
  );
}

export default TodoInsertContainer;
