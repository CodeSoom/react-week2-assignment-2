import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoPage({
  todoTitle,
  todoList,
  onChangeTitle,
  onClickAdd,
  onClickDelete,
}) {
  return (
    <div>
      <h3>To-Do App</h3>
      <TodoInput
        value={todoTitle}
        onChangeTitle={onChangeTitle}
        onClickAdd={onClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default TodoPage;
