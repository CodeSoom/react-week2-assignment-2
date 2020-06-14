import React from 'react';

function TodoItem({ todo, onClickCompleteTodo }) {
  return (
    <p>
      {todo.text}
      <button type="button" onClick={() => onClickCompleteTodo(todo.id)}>완료</button>
    </p>
  );
}

export default TodoItem;
