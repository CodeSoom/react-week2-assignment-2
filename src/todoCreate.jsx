import React from 'react';

export default function TodoCreate({ todo, onChange, onClick }) {
  return (
    <div>
      <input type="text" placeholder="할 일을 입력해 주세요." value={todo.text} onChange={onChange} />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
