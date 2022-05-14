import React from 'react';

export default function Todos({ todos, onClick }) {
  return (
    <div>
      {todos.length > 0
        ? (todos.map((todo, i) => (
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
        )))
        : (<p>할 일이 없어요!</p>)}
    </div>
  );
}
