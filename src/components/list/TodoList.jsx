import React from 'react';

/**
 *
 * @param todos {Todos}
 * @param onClickComplete {Function}
 * @returns {JSX.Element}
 * @constructor
 */
export function TodoList({
  todos,
  onClickComplete,
}) {
  if (todos.isEmpty()) {
    return (
      <div>
        <p>할 일이 없어요!</p>
      </div>
    );
  }

  return (
    <div>
      <ol>
        {todos.readyList.map((todo) => (
          <li key={todo.id}>
            <p>
              {todo.title}
              <button type="button" onClick={() => onClickComplete(todo)}>완료</button>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
