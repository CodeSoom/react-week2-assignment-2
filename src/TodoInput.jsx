import React from 'react';

function TodoInput({ todo, onClick, onChange }) {
  return (
    <div className="todo-input-container">
      <input type="text" value={todo} onChange={onChange} />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
