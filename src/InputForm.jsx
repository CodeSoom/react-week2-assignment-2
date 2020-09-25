import React from 'react';

function InputForm({ todo, onChange, onCreate }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todo || ''}
        onChange={onChange}
      />
      <button type="button" onClick={onCreate}>
        추가
      </button>
    </div>
  );
}

export default InputForm;
