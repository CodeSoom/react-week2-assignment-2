import React from 'react';

const Todos = ({ deleteTodoButton, todos }) => (

  <ol>
    {
      todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo}</span>
          <button
            type="button"
            onClick={() => deleteTodoButton(todo.id)}
          >
            완료
          </button>
        </li>
      ))
    }

  </ol>
);

export default Todos;
