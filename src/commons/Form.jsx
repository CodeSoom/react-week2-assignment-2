import React from 'react';

function Form({ value, updateValue, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} placholder="할 일을 입력해 주세요" onChange={updateValue} />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
