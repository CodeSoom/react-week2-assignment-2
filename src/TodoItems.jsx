import React from 'react';

import Item from './Item';

export default function TodoItems({ todoItems, onClickConfirm }) {
  return (
    <div>
      {
        todoItems.todoList.map((item, index) => (
          <Item
            key={item.task + item.id}
            index={index}
            item={item}
            onClickConfirm={onClickConfirm}
          />
        ))
      }
    </div>
  );
}
