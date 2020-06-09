import React from 'react';

function Todolist() {
  return (
    [1, 2, 3, 4, 5].map((i) => (
      <p>
        {i}
        리스트
        <button key={i} type="button">완료</button>
      </p>
    ))
  );
}

export default Todolist;
