import React from 'react';

import Item from './Item';

export default function TodoItems({ todoList, onClickConfirm }) {
  return (
    <div>
      {
        todoList.map((item, index) => (
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
