import React from 'react';

export default function Input({ onClick, onChange, todo }) {
  return (
    <>
      <input type="text" value={todo} onChange={onChange} />
      <button type="button" onClick={onClick}>추가</button>
    </>
  );
}
