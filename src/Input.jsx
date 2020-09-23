import React from 'react';

function Input({ todo, onChange }) {
  return (
    <input type="text" placeholder="할일을 입력해 주세요" value={todo.content || ''} onChange={onChange} />
  );
}

export default Input;
