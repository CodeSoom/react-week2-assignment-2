import React from 'react';

export default function Todos({ todos, onClick }) {
  const isEmpty = (arr = []) => arr.length === 0;

  if (isEmpty(todos)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      {todos.map((todo, i) => (
        <div
          key={todo.idx}
          style={{
            margin: '10px 0 0 20px',
          }}
        >
          <span>
            {i + 1}
            {'. '}
            {todo.work}
          </span>
          <button type="button" onClick={() => onClick(todo.idx)}>
            완료
          </button>
        </div>
      ))}
    </div>
  );
}
