import React, { useContext } from 'react';

import { TodosContext } from '../context';
import Todo from './views/Todo';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  const renderTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      data={todo}
      handleRemove={removeTodo}
    />
  ));

  return (
    <ul>
      {renderTodos}
    </ul>
  );
};

export default TodoList;
