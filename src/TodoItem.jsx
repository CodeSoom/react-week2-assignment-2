import React from 'react';

import Button from './Button';

export default function TodoItem({ data, onDelete }) {
  return (
    <>
      {
        data.length > 0 ? (
          <>
            {data.map((todo) => (
              <li key={todo.idx}>
                { todo.text }
                {' '}
                <Button onClick={() => onDelete(todo.idx)}>완료</Button>
              </li>
            ))}
          </>
        ) : '할 일이 없어요!'
      }
    </>
  );
}
