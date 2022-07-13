import React, { useState } from 'react';

import CommonButton from './CommonButton';

export default function Input({ handleClick }) {
  const [value, setValue] = useState('');

  const checkInputValue = (e) => {
    const inputText = e.target.value;
    if (inputText) {
      setValue(inputText);
    }
  };

  return (
    <div>
      <label htmlFor="todoInput">
        <input id="todoInput" type="text" onChange={(e) => checkInputValue(e)} />
        <CommonButton lable="추가" handleClick={() => handleClick(value)} disabled={!value && true} />
      </label>
    </div>
  );
}
