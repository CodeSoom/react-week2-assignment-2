import React, { useState } from 'react';

export default function TodoForm({ onClickAdd }) {
  const [todo, setTodo] = useState('');

  function handleChange(event) {
    const { target: { value } } = event;

    setTodo(value);
  }

  function handleClickAdd(value) {
    onClickAdd(value);
    setTodo('');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={todo}
        onChange={handleChange}
      />
      <button type="button" onClick={() => handleClickAdd(todo)}>
        추가
      </button>
    </form>
  );
}
