import React from 'react';

export default function TodoInput({ value, onChange }) {
  return (
    <input onChange={onChange} placeholder="할 일을 입력해주세요." value={value} />
  );
}
