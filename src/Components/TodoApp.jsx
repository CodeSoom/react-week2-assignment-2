import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setState] = useState({
    todos: [],
  });

  const { todos } = state;

  const handleClickAddTodo = (todo) => {
    const todoListLength = todos.length;
    setState({
      todos: [...todos, {
        todo,
        id: todoListLength,
      }],
    });
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInput onClick={handleClickAddTodo} />
      <TodoList todos={todos} onClick={handleClickRemoveTodo} />
    </>
  );
};

export default TodoApp;
