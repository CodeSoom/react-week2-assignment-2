import React from 'react';

export default function TodoForm({ title, onChangeTitle, onClickAddTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={title}
        onChange={(event) => onChangeTitle(event.target.value)}
      />
      <button
        type="button"
        onClick={onClickAddTodo}
      >
        추가
      </button>
    </div>
  );
}
