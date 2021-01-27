import React from 'react';

function Input({ value, onChange }) {
  return (
    <input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={onChange} />
  );
}

export default Input;
