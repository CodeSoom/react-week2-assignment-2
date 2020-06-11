import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList, onClick }) {
  return (
    <ul>
      {
        (todoList.length === 0)
          ? '할 일이 없어요!'
          : todoList.map(
            ({ data, key }) => <Todo key={key} id={key} data={data} onClick={onClick} />,
          )
      }
    </ul>
  );
}
