import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ list, handleRemove }) {
  const style = { marginTop: '20px' };
  return (
    <ul style={style}>
      {list.length ? (
        list.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onClick={() => handleRemove(item.id)}
          />
        ))
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </ul>
  );
}
