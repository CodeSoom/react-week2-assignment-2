import React from 'react';

function Form({ updateValue, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input placholder="할 일을 입력해 주세요" onChange={updateValue} />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
