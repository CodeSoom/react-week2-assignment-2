import React from 'react';

function Input({ todoContent, onChange }) {
  return (
    <input
      type="text"
      placeholder="할일을 입력해 주세요"
      value={todoContent || ''}
      onChange={onChange}
    />
  );
}

export default Input;
