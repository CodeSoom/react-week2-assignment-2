import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ isEmpty, todos, onClick }) {
  if (isEmpty(todos)) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <div>
      {
        todos.map(({ id, text }) => (
          <TodoItem
            key={id}
            id={id}
            text={text}
            onClick={() => onClick(id)}
          />
        ))
      }
    </div>
  );
}
