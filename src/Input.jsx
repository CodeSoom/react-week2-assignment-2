import React from 'react';

function Input({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input id="todoinput" type="text" placeholder="할 일을 입력해 주세요" onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}

export default Input;
