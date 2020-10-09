import React from 'react';

function AddTodo({ todo, onRemove }) {
  return (
    <>
      <div>
        <li>
          {' '}
          {todo.todoTitle}
          <button
            type="button"
            onClick={() => onRemove(todo.id)}
          >
            완료
          </button>
        </li>
      </div>
    </>
  );
}

export default AddTodo;
