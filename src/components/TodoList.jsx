import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoList, handleClickRemove }) {
  const style = { marginTop: '20px' };

  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ul style={style}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} onClickRemove={handleClickRemove} />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
