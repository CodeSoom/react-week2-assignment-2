import React from 'react';

function ToDo({ toDo, index, onClickDelete }) {
  return (
    <p key={toDo.id}>
      {`${index + 1}. ${toDo.content}`}
      <button type="button" onClick={() => onClickDelete(toDo.id)}>
        완료
      </button>
    </p>
  );
}

export default ToDo;
