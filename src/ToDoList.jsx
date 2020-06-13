import React from 'react';

import ToDo from './ToDo';

export default function ToDoList({ toDoList, deleteToDo }) {
  return (
    (toDoList.length) ? (
      <ol start="1">
        {toDoList.map(({ id, text }) => (
          <li key={id}>
            <ToDo
              id={id}
              text={text}
              deleteToDo={deleteToDo}
            />
          </li>
        ))}
      </ol>
    )
      : <div>할 일이 없어요!</div>
  );
}
