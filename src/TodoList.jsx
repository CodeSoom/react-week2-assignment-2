import React from 'react';


function TodoList({ todoList, onDelete }) {
  return (
    <p>
      <ul>
        {
          todoList.map((todo) => (
            <li key={todo.id} type='1'>
              <span>{todo.description}</span>
              <button data-id={todo.id} onClick={(e) => onDelete(e)}>완료</button>
            </li>
          ))
        }
      </ul>
    </p>
  );
}

export default TodoList;
