import React from 'react';

export default function AddForm({ input, handleChange, handleAdd }) {
  function onSubmit(event) {
    event.preventDefault();
    handleAdd(input);
  }
  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="할 일을 입력해 주세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}
