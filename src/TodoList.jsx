import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, onClickRemove }) {
  return (
    <div>
      {todoList.length
        ? (todoList.map(({ id, todo }) => (
          <TodoItem
            key={id}
            id={id}
            text={todo}
            onClickRemove={onClickRemove}
          />
        ))) : <p> 할 일이 없어요!</p>}
    </div>
  );
}

export default TodoList;
