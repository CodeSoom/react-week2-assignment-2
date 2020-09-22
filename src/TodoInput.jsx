import React, { useState } from 'react';

function TodoInput({
  onClick,
}) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onClick(value);
    setValue('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        추가
      </button>
    </>
  );
}

export default TodoInput;
