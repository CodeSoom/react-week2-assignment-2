import React from 'react';

function Todo({ index, todo, onCompleteTodo }) {
  return (
    <div>
      <b>{index + 1}</b>
      <span>
        -
        {todo.task}
      </span>
      <button type="button" onClick={onCompleteTodo}>완료</button>
    </div>
  );
}

export default Todo;
