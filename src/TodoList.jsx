import React from 'react';

import Todo from './Todo';

function TodoList({ todoList, onClick }) {
  return (
    <>
      {todoList.length === 0 && '할 일이 없어요!'}
      <ol>
        {todoList.map((todo, index) => (
          <Todo
            todo={todo}
            onClick={() => onClick(index)}
            key={`${index + 1}.${todo}`}
          />
        ))}
      </ol>
    </>
  );
}

export default TodoList;
