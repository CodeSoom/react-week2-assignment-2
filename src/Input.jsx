import React from 'react';


function Input({ description, handleChange, handleAdd }) {
  return (
    <p>
      <input
        type='text'
        placeholder='할 일을 입력해 주세요'
        value={description}
        onChange={(e) => handleChange(e.target.value)}>
      </input>
      <button
        type='button'
        onClick={handleAdd}>
        추가
        </button>
    </p>
  );
}

export default Input;
