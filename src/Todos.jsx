import React from 'react';

function Todos({ todos, onDelete }) {
  return (
    <p>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} type="1">
              <span>{todo.description}</span>
              <button
                type="button"
                data-id={todo.id}
                onClick={onDelete}
              >
                완료
              </button>
            </li>
          ))
        }
      </ul>
    </p>
  );
}

export default Todos;
