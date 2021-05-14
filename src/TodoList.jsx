import React from 'react';

import Button from './common/Button';

export default function TodoList({ todoList, onClickRemoveTodo }) {
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
              onPress={() => onClickRemoveTodo(todo)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
