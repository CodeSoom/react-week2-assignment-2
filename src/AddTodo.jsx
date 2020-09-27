import React from 'react';

function AddTodo({ todo, onRemove }) {
  return (
    <>

      <div>
        <p>
          {todo.id}
          {' '}
          {todo.todoTitle}
          <button
            type="button"
            onClick={() => onRemove(todo.id)}
          >
            완료
          </button>
        </p>
      </div>
    </>
  );
}

export default AddTodo;
