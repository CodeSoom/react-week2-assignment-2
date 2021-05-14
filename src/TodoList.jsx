import React from 'react';

import RemoveButton from './RemoveButton';

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
            <RemoveButton
              todo={todo}
              onClickRemove={onClickRemove}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
