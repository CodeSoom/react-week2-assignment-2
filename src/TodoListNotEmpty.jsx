import React from 'react';

import TodoListItem from './TodoListItem';

export default function TodoListNotEmpty({ list, remove }) {
  return list.map((item) => (
    <TodoListItem key={item.id} item={item} onClick={() => remove(item.id)} />
  ));
}
