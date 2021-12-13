import React, { useState } from 'react';

export default function Insert({ placeholder, onClick }) {
  const [inputValue, setInputValue] = useState('');
  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const onClickWrap = () => {
    onClick(inputValue);
    setInputValue('');
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
      />
      <button type="button" onClick={onClickWrap}>
        추가
      </button>
    </div>
  );
}
