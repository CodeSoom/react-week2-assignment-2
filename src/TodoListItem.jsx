import React from 'react';

function TodoListItem({ todo: { id, content }, handleDeleteTodo }) {
  return (
    <li>
      <span>{content}</span>
      <button
        type="button"
        onClick={() => handleDeleteTodo(id)}
      >
        완료
      </button>
    </li>
  );
}

export default TodoListItem;
