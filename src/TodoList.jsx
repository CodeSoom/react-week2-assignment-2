import React from 'react';

import Todo from './Todo';

function TodoList({ todoList, onClickDone }) {
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
            onClickDone={onClickDone}
          />
        ))}
      </ol>
    </>
  );
}

export default TodoList;
