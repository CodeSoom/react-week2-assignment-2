import React from 'react';

function Input({ input, onAdd, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요."
        value={input}
        onChange={onChange}
      />
      <button type="button" onClick={() => onAdd()}>
        추가
      </button>
    </div>
  );
}

export default Input;
