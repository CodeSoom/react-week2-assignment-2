import React from 'react';

export default function Input({ value, onChange }) {
  function passingValue(event) {
    onChange(event.target.value);
  }

  return (
    <input type="text" placeholder="할 일을 입력해주세요." value={value} onChange={(e) => passingValue(e)} />
  );
}
