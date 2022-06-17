import React from 'react';

function TodoItem({ item, index, onRemoveTodoItem }) {
  return (
    <div key={item.id}>
      <span>
        {index + 1}
        .
        {item.text}
      </span>
      <button type="button" onClick={() => onRemoveTodoItem(item.id)}>완료</button>
    </div>
  );
}

export default TodoItem;
