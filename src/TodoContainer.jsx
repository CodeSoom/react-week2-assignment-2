import React from 'react';

import TodoItem from './TodoItem';

export default function TodoContainer({
  todoItems, onTodoDone,
}) {
  return todoItems.map((todoItem, index) => (
    <TodoItem
      key={`${todoItem}.${String(index)}`}
      index={index}
      todoItem={todoItem}
      onTodoDone={onTodoDone}
    />
  ));
}
