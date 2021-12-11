import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setState] = useState({
    todos: [],
    todo: '',
  });

  const { todos, todo } = state;

  const handleChangeInput = (e) => {
    setState({
      ...state,
      todo: e.target.value,
    });
  };

  const handleClickAddTodo = () => {
    if (todo === '') {
      return;
    }
    setState({
      todos: [...todos, {
        todo,
        id: todos.length,
      }],
      todo: '',
    });
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      ...state,
      todos: todos.filter((v) => v.id !== id),
    });
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInput todo={todo} onClick={handleClickAddTodo} onChange={handleChangeInput} />
      <TodoList todos={todos} onClick={handleClickRemoveTodo} />
    </>
  );
};

export default TodoApp;
