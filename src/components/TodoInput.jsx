import React from "react";

export default function TodoInput({ todo, handleInput, handleClickAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={todo}
        onChange={handleInput}
      />
      <button type="submit" onClick={handleClickAdd}>
        추가
      </button>
    </div>
  );
}
