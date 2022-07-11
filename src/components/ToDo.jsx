import React from 'react';

function Todo({
  index,
  toDo,
  onCompleteButtonClick,
}) {
  return (
    <p id={index.toString()}>
      {`${index + 1}. ${toDo}`}
      <button type="button" onClick={() => onCompleteButtonClick(index)}>완료</button>
    </p>
  );
}

export default Todo;
