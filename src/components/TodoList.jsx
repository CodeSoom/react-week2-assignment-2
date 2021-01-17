import React, { useContext } from 'react';

import { TodosContext } from '../context/TodosContext';
import Todo from './views/Todo';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id.toString()}
          todo={todo}
          onClick={() => removeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
