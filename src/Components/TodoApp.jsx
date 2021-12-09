import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setState] = useState({
    todoList: [],
  });

  const { todoList } = state;

  const handleClickAddTodo = (todo) => {
    const todoListLength = todoList.length;
    setState({
      todoList: [...todoList, {
        todo,
        id: todoListLength,
      }],
    });
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      todoList: todoList.filter((todo) => todo.id !== id),
    });
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInput onClick={handleClickAddTodo} />
      <TodoList todoList={todoList} onClick={handleClickRemoveTodo} />
    </>
  );
};

export default TodoApp;
