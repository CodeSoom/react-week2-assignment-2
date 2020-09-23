import React, { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
  const initialState = { todoText: '' };

  const [state, setState] = useState(
    initialState,
  );

  const { todoText } = state;

  const handleChange = (e) => {
    setState({
      todoText: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText === '') return;

    onAddTodo(todoText);
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoText}
        onChange={handleChange}
      />
      <button type="submit" value="submit">
        추가
      </button>
    </form>
  );
}
