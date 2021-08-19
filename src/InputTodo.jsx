import React from 'react';

export default function InputTodo({ onChange, onClick }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div>
      <input placeholder="할 일을 입력해주세요" onChange={handleChange} />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
