import React from 'react';

function User({ todo, onRemove }) {
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

export default User;
