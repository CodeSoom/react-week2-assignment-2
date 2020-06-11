import React from 'react';

import Empty from './Empty';
import Todo from './Todo';

export default function TodoList({ items, deleteItem }) {
  if (!items.length) {
    return <Empty />;
  }
  return <Todo items={items} onClick={deleteItem} />;
}
