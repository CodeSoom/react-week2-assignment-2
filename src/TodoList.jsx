import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClick }) {
  const style = { marginTop: '20px' };
  return (
    <ul style={style}>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onClick={onClick}
          />
        ))
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </ul>
  );
}
