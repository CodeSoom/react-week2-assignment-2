import React from 'react';

import ToDo from './ToDo';

export default function ToDoList({ toDos, deleteToDo }) {
  if (toDos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <ol start="1">
      {toDos.map(({ id, text }) => (
        <ToDo
          key={id}
          id={id}
          text={text}
          deleteToDo={deleteToDo}
        />
      ))}
    </ol>
  );
}
