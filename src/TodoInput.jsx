import React from 'react';

export default function TodoInput({
  value, onChange, onClick,
}) {
  return (
    <p>
      <input type="text" value={value} onChange={onChange} placeholder="할 일을 입력해 주세요" />
      <button type="button" onClick={onClick}>추가</button>
    </p>
  );
}
