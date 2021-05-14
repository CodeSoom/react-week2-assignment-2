import React from 'react';

import TodoRemoveButton from './TodoRemoveButton';

export default function TodoList({ todoList, onClickRemove }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo) => (
          <li>
            {todo}
            <TodoRemoveButton
              todo={todo}
              onClickRemove={onClickRemove}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
