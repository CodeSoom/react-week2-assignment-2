import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoItems, onClickDeleteTodo }) {
  return (
    <ol>
      {todoItems.length === 0
        ? <p>할 일이 없어요!</p>
        : (todoItems.map((item) => (
          <TodoItem
            item={item}
            onClickDeleteTodo={onClickDeleteTodo}
            key={item.id}
          />
        )))}
    </ol>
  );
}
export default TodoList;
