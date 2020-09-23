import React from 'react';

<<<<<<< HEAD
function List({ onClick, toDos }) {
  return (
    <>
      {toDos.map(({ toDo, id }) => (
        <li key={id}>
          {toDo}
          <button type="button" onClick={() => onClick(id)}>
=======
>>>>>>> 1fe368d6577bff0713ca79b1deadb192862a6e8d
            완료
          </button>
        </li>
      ))}
    </>
  );
}

export default List;
