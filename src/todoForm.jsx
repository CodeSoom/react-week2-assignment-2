import React from 'react';

export default function TodoForm({ todo, handleChange, handleClickAdd }) {
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
