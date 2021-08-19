import React, { useState } from 'react';

export default function InputTodo({ onChange, onClick }) {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
    onChange(e.target.value);
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
