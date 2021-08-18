import React from 'react';

export default function InputTodo({ onChange }) {
  return (
    <input placeholder="할 일을 입력해주세요" onChange={(e) => onChange(e)} />
  );
}
