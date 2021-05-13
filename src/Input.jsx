import React from 'react';

function Input({ description, onChange, onAdd }) {
  return (
    <p>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={description}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        onClick={onAdd}
      >
        추가
      </button>
    </p>
  );
}

export default Input;
