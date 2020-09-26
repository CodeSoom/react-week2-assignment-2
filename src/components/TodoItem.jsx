import React from 'react';

function TodoItem({ todo, count, onClick }) {
  return (
    <div>
      {`${count + 1}. ${todo}`}
      <button type="button" onClick={onClick}>완료</button>
    </div>
  );
}

export default TodoItem;
