import React from 'react';

function TodoItem({ todo, count, onRemove }) {
  return (
    <div>
      {`${count + 1}. ${todo}`}
      <button type="button" onClick={onRemove}>완료</button>
    </div>
  );
}

export default TodoItem;
