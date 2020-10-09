import React from 'react';
import AddTodo from './AddTodo';

function TodoTitle({ todos, onRemove }) {
  return (
    <>
      <div>
        {todos.length === 0
          ? <p>할 일이 없어요!</p>
          : (
            <ol>
              {todos.map((todo) => (
                <AddTodo
                  todo={todo}
                  key={todo.id}
                  onRemove={onRemove}
                />
              ))}
            </ol>
          )}
      </div>
    </>
  );
}

export default TodoTitle;
