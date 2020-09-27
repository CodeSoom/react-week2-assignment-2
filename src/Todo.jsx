import React from 'react';

function Todo({ todo, onClickDelete }) {
  return (
    <div>
      {todo.title}
      <button type="button" onClick={() => onClickDelete(todo.id)}>
        완료
      </button>
    </div>
  );
}

export default Todo;
