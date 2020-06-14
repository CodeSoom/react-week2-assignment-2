import React from 'react';

import Item from './Item';

export default function TodoList({ todoList, onClickConfirm }) {
  const defaultLabel = todoList.length === 0 ? '할 일이 없어요!' : '';
  return (
    <div>
      <p>
        {defaultLabel}
      </p>
      {
        todoList.map((item, index) => (
          <Item
            key={item.taskId}
            index={index}
            item={item}
            onClickConfirm={onClickConfirm}
          />
        ))
      }
    </div>
  );
}
