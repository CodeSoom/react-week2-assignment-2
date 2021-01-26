import React from 'react';

function ToDoList({ toDo }) {
  console.log(toDo);
  return (
    <p>
      {toDo}
    </p>
  );
}

export default ToDoList;
