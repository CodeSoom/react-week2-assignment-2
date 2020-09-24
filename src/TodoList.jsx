import React from 'react';

import Todo from './Todo';

function TodoList({ todoList, onClick }) {
  if (todoList.length === 0) {
    return (
      <>
        <p>할 일이 없어요!</p>
      </>
    );
  }

  return (
    <>
      <ol>
        {todoList.map((content) => (
          <Todo
            content={content}
            onClick={onClick}
          />
        ))}
      </ol>
    </>
  );
}

export default TodoList;
