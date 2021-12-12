import { useState } from 'react';

import TodoPage from './TodoPage';

const TodoApp = () => {
  const [state, setState] = useState({
    newId: 100,
    todos: [],
    todoTitle: '',
  });

  const { newId, todos, todoTitle } = state;

  const handleChangeInput = (e) => {
    setState({
      ...state,
      todoTitle: e.target.value,
    });
  };

  const handleClickAddTodo = () => {
    if (todoTitle === '') {
      return;
    }
    setState({
      newId: newId + 1,
      todos: [...todos, {
        title: todoTitle,
        id: newId,
      }],
      todoTitle: '',
    });
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <TodoPage
      todoTitle={todoTitle}
      todos={todos}
      onClickAddTodo={handleClickAddTodo}
      onClickRemoveTodo={handleClickRemoveTodo}
      onChangeTodo={handleChangeInput}
    />
  );
};

export default TodoApp;
