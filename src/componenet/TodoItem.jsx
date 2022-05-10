import React from 'react';

function TodoItem({ text, onClick }) {
  return (
    <div>
      <ul>
        <li>
          {text}
          <button type="button" onClick={onClick}>완료</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoItem;
