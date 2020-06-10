import React from 'react';

function Todolist({ todos, completeClick }) {
  if (todos.length > 0) {
    return (
      todos.map((value, index) => (
        <p>
          {value}
          <button type="button" onClick={() => completeClick(index)}>완료</button>
        </p>
      ))
    );
  }

  return (
    <p>
      할 일이 없어요!
    </p>
  );
}

export default Todolist;
