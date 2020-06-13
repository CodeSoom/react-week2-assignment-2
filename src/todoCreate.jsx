import React from 'react';

function TodoCreate({ todo, handleTodoChange, handleCreateClick }) {
  return (
    <div>
      <input type="text" placeholder="할 일을 입력해 주세요." value={todo} onChange={handleTodoChange} />
      <button type="button" onClick={() => handleCreateClick()}>
        추가
      </button>
    </div>
  );
}
export default TodoCreate;
