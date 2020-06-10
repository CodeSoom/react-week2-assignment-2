import React from 'react';

function Todolist({ todos }) {
  if (todos.length > 0) {
    return (
      todos.map((value) => (
        <p>
          {value}
          <button type="button">완료</button>
        </p>
      ))
    );
  }

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
