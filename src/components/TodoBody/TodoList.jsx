import React from 'react';

import Todo from './Todo';

export default function TodoList({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <ul>
      {
        todos.map(
          ({ content, key }) => (
            <Todo
              key={key}
              id={key}
              data={content}
              onClick={() => onClick(key)}
            />
          ),
        )
      }
    </ul>
  );
}
