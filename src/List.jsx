import React from 'react';

function List({ onClick, toDos }) {
  return (
    <>
      {toDos.map(({ toDo, id }) => (
        <li key={id}>
          {toDo}
          <button type="button" onClick={() => onClick(id)}>
            완료
          </button>
        </li>
      ))}
    </>
  );
}

export default List;
