import React from 'react';

export default function Form({ newTask, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={newTask}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
