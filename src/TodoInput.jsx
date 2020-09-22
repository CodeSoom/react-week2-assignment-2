import React from 'react';

function TodoInput({ todo, onChange }) {
  return (
    <input type="text" placeholder="할일을 입력해 주세요" value={todo || ''} onChange={onChange} />
  );
}

export default TodoInput;
