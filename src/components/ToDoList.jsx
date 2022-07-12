import React from 'react';

function ToDoList({
  toDoList,
  onClickDelete,
}) {
  function renderToDoList(toDos) {
    return toDos.map(((toDo, index) => (
      <p key={toDo.id}>
        {`${index + 1}. ${toDo.content}`}
        <button
          type="button"
          onClick={() => onClickDelete(toDo.id)}
        >
          완료
        </button>
      </p>
    )));
  }

  if (toDoList.length === 0) { return (<p>할 일이 없어요!</p>); }

  return (
    <div>
      {renderToDoList(toDoList)}
    </div>
  );
}

export default ToDoList;
