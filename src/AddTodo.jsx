import React from 'react';

function AddTodo({ todo, handleInputTodo, handleAddTodo }) {
  return (
    <div>
      <input placeholder="할 일을 입력해주세요" value={todo} onChange={handleInputTodo} />
      <button type="button" onClick={handleAddTodo}>추가</button>
    </div>
  );
}

export default AddTodo;
