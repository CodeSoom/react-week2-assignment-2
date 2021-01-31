import React from 'react';

export default function TodoInput({ todoInput, updateInput, updateTodoList }) {
  return (
    <div>
      <input
        onChange={(e) => updateInput(e.target.value)}
        placeholder="할 일을 입력해주세요."
        value={todoInput}
      />
      <button
        type="button"
        onClick={() => updateTodoList(todoInput)}
      >
        추가
      </button>
    </div>
  );
}
