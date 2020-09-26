import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoPage({
  todoTitle,
  todoList,
  handleChangeTitle,
  handleClickAdd,
  handleClickDelete,
}) {
  return (
    <div>
      <h3>To-Do App</h3>
      <TodoInput
        value={todoTitle}
        onChangeTitle={handleChangeTitle}
        onClickAdd={handleClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClickDelete={handleClickDelete}
      />
    </div>
  );
}

export default TodoPage;