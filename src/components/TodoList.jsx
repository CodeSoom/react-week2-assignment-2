import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList, onClick }) {
  return (
    <ul>
      {todoList.map(({ key, data }) => <Todo key={key} id={key} data={data} onClick={onClick} />)}
    </ul>
  );
}
