import React from 'react';

import Button from './Button';

export default function TodoItem({ todoList, onDelete }) {
  return (
    <>
      {
        todoList.length > 0 ? (
          <>
            {todoList.map((todo) => (
              <li key={todo.id}>
                { todo.text }
                {' '}
                <Button onClick={() => onDelete(todo.id)}>완료</Button>
              </li>
            ))}
          </>
        ) : '할 일이 없어요!'
      }
    </>
  );
}
