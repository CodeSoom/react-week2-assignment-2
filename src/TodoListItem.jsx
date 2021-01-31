import React from 'react';

function TodoListItem({ todo: { content }, handleDeleteTodo }) {
  return (
    <li>
      <span>{content}</span>
      <button
        type="button"
        onClick={handleDeleteTodo}
      >
        완료
      </button>
    </li>
  );
}

export default TodoListItem;
