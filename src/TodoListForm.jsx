import React from 'react';

export default function TodoListForm({ input, onChange, onClick }) {
  return (
    <div>
      <input type="text" value={input} onChange={onChange} placeholder="할 일을 입력해주세요." />
      <button type="button" onClick={onClick}>추가</button>
    </div>
  );
}
