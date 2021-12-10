import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setState] = useState({
    todos: [],
    inputTodo: '',
  });

  const { todos, inputTodo } = state;

  const handleChangeInput = (e) => {
    setState({
      ...state,
      inputTodo: e.target.value,
    });
  };

  const handleClickAddTodo = () => {
    if (inputTodo !== '') {
      setState({
        todos: [...todos, {
          todo: inputTodo,
          id: todos.length,
        }],
        inputTodo: '',
      });
    }
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInput todo={inputTodo} onClick={handleClickAddTodo} onChange={handleChangeInput} />
      <TodoList todos={todos} onClick={handleClickRemoveTodo} />
    </>
  );
};

export default TodoApp;
