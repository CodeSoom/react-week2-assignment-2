import React from 'react';

import toDoConstant from './constant/todo';

export function ToDoItems({ toDos = [] }) {
  const isToDoExist = toDos.length !== 0;

  return (
    <div>
      {isToDoExist
        ? toDos.map((toDoItem) => <li>{toDoItem}</li>)
        : toDoConstant.noData}
    </div>
  );
}
