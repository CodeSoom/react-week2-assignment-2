import React from 'react';

function Input({ onChange }) {
  return (
    <input id="todoinput" type="text" placeholder="할 일을 입력해 주세요" onChange={onChange} />
  );
}

export default Input;
