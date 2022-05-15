import React from 'react';

export default function TodoList({ todo, order, onClickAddTask }) {
  return (
    <div>
      <span>{`${order}. ${todo.title}`}</span>
      <button type="button" onClick={() => onClickAddTask(todo.id)}>
        완료
      </button>
    </div>
  );
}
