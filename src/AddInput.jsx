import React from 'react';

function Input({ value, handleInput }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="할 일을 입력해 주세요"
      />
      <button
        type="submit"
      >
        추가
      </button>
    </>
  );
}

export default Input;
