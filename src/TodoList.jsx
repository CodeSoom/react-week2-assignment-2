import React from 'react';

function TodoList({ todo, order, onClick }) {
  return (
    <div>
      <span>{`${order}. ${todo.text}`}</span>
      <button type="button" onClick={() => onClick(todo.id)}>
        완료
      </button>
    </div>
  );
}

export default TodoList;
