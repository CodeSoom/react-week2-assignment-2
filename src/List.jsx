import React from 'react';

function List({ onClick, toDos, key }) {
  return (
    <>
      {toDos.map((toDo) => (
        <li key={key}>
          {toDo}
          <button type="button" onClick={onClick}>
            완료
          </button>
        </li>
      ))}
    </>
  );
}

export default List;
