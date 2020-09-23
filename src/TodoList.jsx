import React from 'react';

import Todo from './Todo';

function TodoList({ todoList, onClickDone }) {
  const element = todoList.length === 0 ? (<p>할 일이 없어요!</p>) : (
    <ol>
      {todoList.map((content) => (
        <Todo
          content={content}
          onClickDone={onClickDone}
        />
      ))}
    </ol>
  );

  return (
    <>
      {element}
    </>
  );
}

export default TodoList;
