import React, { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
  const initialState = { todoItem: '' };

  const [state, setState] = useState(
    initialState,
  );

  const { todoItem } = state;

  const handleChange = (e) => {
    setState({
      todoItem: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem === '') return;

    onAddTodo(todoItem);
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoItem}
        onChange={handleChange}
      />
      <button type="submit" value="submit">
        추가
      </button>
    </form>
  );
}
