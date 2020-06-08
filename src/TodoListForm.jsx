import React from 'react';

export default function TodoListForm({ input, onChange, onClick }) {
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button type="button" onClick={onClick}>추가</button>
    </div>
  );
}
