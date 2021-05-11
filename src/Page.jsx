import React from 'react';

import Input from './Input.jsx';


function Page({ description, todoList, onAdd, onChange, onDelete }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        description={description}
        onAdd={onAdd}
        onChange={onChange} />
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
    </div>
  )
}

export default Page;
