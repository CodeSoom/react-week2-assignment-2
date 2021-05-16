import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList, onClickRemoveTodo }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo, index) => {
          const key = `${todo}_${index}`;

          return (
            <Todo
              key={key}
              todo={todo}
              index={index}
              onClickRemoveTodo={onClickRemoveTodo}
            />
          );
        })}
      </ol>
    </div>
  );
}
