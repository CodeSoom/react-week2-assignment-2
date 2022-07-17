import React from 'react';

import ToDo from './ToDo';

function ToDoList({
  toDoList,
  onClickDelete,
}) {
  if (toDoList.length === 0) {
    return (<p>할 일이 없어요!</p>);
  }

  return (
    <div>
      {toDoList.map((toDo, index) => (
        <ToDo toDo={toDo} index={index} onClickDelete={onClickDelete} />
      ))}
    </div>
  );
}

export default ToDoList;
