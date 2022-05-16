import React, { useState } from 'react';

export default function Input({ onClick }) {
  const [input, setInput] = useState('');

  const handleInputChange = (value) => {
    setInput(value);
  };

  return (
    <div>
      <input
        value={input}
        placeholder="할 일을 입력해 주세요"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          onClick(input);
          setInput('');
        }}
      >
        추가
      </button>
    </div>
  );
}
