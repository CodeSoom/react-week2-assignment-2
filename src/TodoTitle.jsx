import React from 'react';
import AddTodo from './AddTodo';

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
          <AddTodo
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
