import React from 'react';

function TodoListItem({ todo, handleDeleteTodo }) {
  return (
    <li>
      <span>{todo.content}</span>
      <button
        type="button"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        완료
      </button>
    </li>
  );
}

export default TodoListItem;
