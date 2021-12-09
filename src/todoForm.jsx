import React from 'react';

export default function TodoForm({ todo, onChange, handleClickAdd }) {
  function handleChange(event) {
    const { target: { value } } = event;

    onChange(value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={todo}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClickAdd}>
        추가
      </button>
    </form>
  );
}
