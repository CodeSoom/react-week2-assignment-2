import React from 'react';

/**
 *
 * @param todos {Todos}
 * @returns {JSX.Element}
 * @constructor
 */
export function TodoList({
  todos,
}) {
  function completeTodo(todo) {
    todo.complete();
  }

  console.log(`todos=${JSON.stringify(todos.list)}`);

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
