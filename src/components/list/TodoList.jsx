import React from 'react';

export function TodoList({
  todos,
}) {
  function completeTodo(todo) {
    todo.complete();
  }

  return (
    <div>
      <ol>
        {todos.readyList.map((todo) => (
          <li key={todo.id}>
            <p>
              {todo.title}
              <button type="button" onClick={() => completeTodo(todo)}>완료</button>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
