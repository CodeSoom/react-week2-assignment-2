import React from 'react';

function CreateTodo({ input, onChange, onClick }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="할 일을 입력해 주세요."
        onChange={onChange}
      />
      <button type="button" onClick={() => onClick()}>
        추가
      </button>
    </div>
  );
}

export default CreateTodo;
