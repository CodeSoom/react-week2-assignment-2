import React from 'react';

function TodoItem({ todoItem }) {
  return (
    <li>
      {todoItem.text}
      <button type="button">완료</button>
    </li>
  );
}

export default TodoItem;
