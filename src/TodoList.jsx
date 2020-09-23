import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ tasks }) {
  return (
    tasks.map(({ name, date }, index) => (
      <TodoItem key={date} index={index} name={name} />
    ))
  );
}
