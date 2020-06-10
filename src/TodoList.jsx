import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClicktoRemove }) {
  const style = { marginTop: '20px' };

  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ul style={style}>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            item={todo}
            onClicktoRemove={onClicktoRemove}
          />
        );
      })}
    </ul>
  );
}
