import React from 'react';

import Item from './item';

export default function Todoilst({
  todos, onCompleteClick,
}) {
  return (
    <ol>
      {
        !todos.length
          ? <div>할 일이 없어요!</div>
          : todos.map(({ title, index }) => (
            <Item
              index={index}
              title={title}
              onCompleteClick={onCompleteClick}
            />
          ))
      }
    </ol>
  );
}
