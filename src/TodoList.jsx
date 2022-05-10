import React from 'react';

function TodoList({ todoList, order, onClick }) {
  return (
    <div>
      <span>{`${order}. ${todoList.text}`}</span>
      <button type="button" onClick={() => onClick(todoList.id)}>완료</button>
    </div>
  );
}

export default TodoList;
