import React from 'react';

function Todos({ todos, onDelete }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>할 일이 없어요!</p>
      ) : (
        <p>
          <ul>
            {todos.map(({ id, description }) => (
              <li key={id} type="1">
                <span>{description}</span>
                <button type="button" onClick={() => onDelete(id)}>
                  완료
                </button>
              </li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
}

export default Todos;
