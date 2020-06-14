import React from 'react';

export default function InsertForm({ note, onChangeWriteTodo, onClickAddTodo }) {
  return (
    <div>
      <p>
        <input
          type="text"
          value={note || ''}
          placeholder="할 일을 입력해 주세요"
          onChange={onChangeWriteTodo}
        />
        <button type="button" onClick={() => onClickAddTodo()}>
          추가
        </button>
      </p>
    </div>
  );
}
