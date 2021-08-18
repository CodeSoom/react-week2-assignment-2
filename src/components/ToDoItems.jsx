import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoItems({ items, onClickComplete }) {
  return (
    <div>
      {
        items.length > 0
          ? items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              onClickComplete={onClickComplete}
            />
          ))
          : <div>할 일이 없어요!</div>
      }
    </div>
  );
}

export default ToDoItems;
