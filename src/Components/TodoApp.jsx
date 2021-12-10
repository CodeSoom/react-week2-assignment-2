import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setState] = useState({
    todos: [],
  });

  const { todos } = state;

  const handleClickAddTodo = (todo) => {
    setState({
      todos: [...todos, {
        todo,
        id: todos.length,
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
