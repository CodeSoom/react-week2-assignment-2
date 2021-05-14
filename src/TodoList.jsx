import React from 'react';

import Button from './common/Button';

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
            <Button
              title="완료"
              onPress={() => onClickRemove(todo)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
