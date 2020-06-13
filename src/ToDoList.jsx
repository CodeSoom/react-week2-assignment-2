import React from 'react';

import ToDo from './ToDo';

export default function ToDoList({ toDos, deleteToDo }) {
  if (toDos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <ol start="1">
      {toDos.map(({ uuid, text }) => (
        <li key={uuid}>
          <ToDo
            uuid={uuid}
            text={text}
            deleteToDo={deleteToDo}
          />
        </li>
      ))}
    </ol>
  );
}
