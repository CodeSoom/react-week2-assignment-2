import React from 'react';

import TodoListItem from './TodoListItem';

export default function TodoList({ list, handleRemove }) {
  const style = { marginTop: '20px' };
  return (
    <ul style={style}>
      {list.length ? (
        list.map((item) => (
          <TodoListItem
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
