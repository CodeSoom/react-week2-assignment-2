import React from 'react';

import ToDo from './ToDo';

function ToDoList({
  toDoArray,
  onCompleteButtonClick,
}) {
  return (
    <div>
      {toDoArray.length ? (
        toDoArray.map(((todo, index) => (
          <ToDo
            key={index.toString()}
            index={index}
            toDo={todo}
            onCompleteButtonClick={onCompleteButtonClick}
          />
        )))
      ) : (<p>할 일이 없어요!</p>)}
    </div>
  );
}

export default ToDoList;
