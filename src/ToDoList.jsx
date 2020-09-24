import React from 'react';

import ToDoItem from './ToDoItem';

function ToDoList({ onClick, toDos }) {
  const isToDo = (array) => (array.length === 0);

  if (isToDo(toDos)) {
    return (
      <h3>할 일이 없어요!</h3>
    );
  }
  return (
    <ul>
      <ToDoItem
        onClick={onClick}
        toDos={toDos}
      />
    </ul>
  );
}

export default ToDoList;
