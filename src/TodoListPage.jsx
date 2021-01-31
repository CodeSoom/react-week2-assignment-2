import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoListPage({
  todo,
  todoList,
  handleTodoInput,
  handleAddTodo,
  handleDeleteTodo,
}) {
  return (
    <div className="to-do-list-page">
      <TodoInput
        todo={todo}
        onClick={handleAddTodo}
        onChange={handleTodoInput}
      />
      <br />
      <TodoList todoList={todoList} onClick={handleDeleteTodo} />
    </div>
  );
}

export default TodoListPage;
