import React from 'react';

function Input({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}

export default Input;
