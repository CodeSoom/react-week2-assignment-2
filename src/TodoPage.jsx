import React from 'react';
import TodoList from './TodoList';
import TodoAddBox from './TodoAddBox';
import EmptyBox from './EmptyBox';

function TodoPage({
  todo, todos, isEmpty, handleChangeTodo, handleClickAdd, handleClickFinish,
}) {
  return (
    <div>
      <h2>To-do</h2>
      <TodoAddBox
        todo={todo}
        handleChangeTodo={handleChangeTodo}
        handleClickAdd={handleClickAdd}
      />
      <EmptyBox isEmpty={isEmpty} />

      <TodoList
        todos={todos}
        handleClickFinish={handleClickFinish}
      />
    </div>
  );
}

export default TodoPage;
