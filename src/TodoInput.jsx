import React from 'react';

function TodoInput({
  value,
  onChangeTitle,
  onClickAdd,
}) {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="할 일을 입력해주세요"
        onChange={(e) => onChangeTitle(e.target.value)}
      />
      <button type="button" onClick={onClickAdd}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
