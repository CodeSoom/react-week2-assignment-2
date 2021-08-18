import React from 'react';

function ToDoItem({ item, onClickComplete }) {
  const { id, value } = item;
  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={() => onClickComplete(id)}>완료</button>
    </div>
  );
}

export default ToDoItem;
