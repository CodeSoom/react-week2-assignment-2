import React from 'react';

function Input({ newTodo, onChange }) {
  return (
    <input type="text" placeholder="할일을 입력해 주세요" value={newTodo || ''} onChange={onChange} />
  );
}

export default Input;
