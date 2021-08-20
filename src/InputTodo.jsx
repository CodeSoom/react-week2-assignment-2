import React, { useState } from 'react';

export default function InputTodo({ onChange, onClick }) {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setInputText(value);
    onChange(value);
  }
  function handleClick() {
    onClick();
    setInputText('');
  }

  return (
    <div>
      <input value={inputText} placeholder="할 일을 입력해주세요" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
