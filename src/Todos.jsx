import React from 'react';


function Todos({ todos, handleDelete }) {
  return (
    <p>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} type='1'>
              <span>{todo.description}</span>
              <button data-id={todo.id} onClick={handleDelete}>완료</button>
            </li>
          ))
        }
      </ul>
    </p>
  );
}

export default Todos;
