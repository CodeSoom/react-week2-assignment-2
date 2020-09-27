import React from 'react';
import User from './User';

function TodoTitle({ todos, onRemove }) {
  return (
    <>
      <div>
        <p style={{
          display: todos.length === 0 ? 'block' : 'none',
        }}
        >
          할 일이 없어요!
        </p>
      </div>

      <div>
        {todos.map((todo) => (
          <User
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
          />

        ))}
      </div>
    </>

  );
}

export default TodoTitle;
