import React from 'react';

function ToDoList({ todo, onRemoveTask }) {
  if (todo.length === 0) {
    return '할 일이 없어요!';
  }

  return (
    <>
      {todo.map((item, index) => (
        <div>
          {index + 1}
          .
          {' '}
          {item}
          <button type="button" onClick={() => onRemoveTask(index)}>완료</button>
        </div>
      ))}
    </>
  );
}

export default ToDoList;
