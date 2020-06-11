import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList, onClick }) {
  if (todoList.length === 0) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <ul>
      {
        todoList.map(
          ({ content, key }) => <Todo key={key} id={key} data={content} onClick={onClick} />,
        )
      }
    </ul>
  );
}
