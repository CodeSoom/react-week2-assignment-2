import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(({ key, data }) => <Todo key={key} data={data} />)}
    </ul>
  );
}
