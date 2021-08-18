import React from 'react';

function InputContainer({ value, onInputChange, onClickAdd }) {
  return (
    <>
      <input value={value} onChange={onInputChange} />
      <button type="button" onClick={onClickAdd}>추가</button>
    </>
  );
}

export default InputContainer;
