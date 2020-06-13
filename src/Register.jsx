import React from 'react';

export default function Register({ toDoInput, handleToDoInput, createToDo }) {
  return (
    <div>
      <input
        type="text"
        name="toDoInput"
        value={toDoInput}
        onChange={(e) => handleToDoInput(e)}
        placeholder="할 일을 입력해주세요."
      />
      <button
        type="button"
        onClick={() => createToDo()}
      >
        추가
      </button>
    </div>
  );
}
