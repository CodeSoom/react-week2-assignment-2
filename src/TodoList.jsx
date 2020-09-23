import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ tasks }) {
  return (
    tasks.map(({ id, name }, index) => (
      <TodoItem key={id} index={index} name={name} />
    ))
  );
}
