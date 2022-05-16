import React from 'react';

import useStore from './useStore';
import AppView from './AppView';

export default function App() {
  const {
    addTodoItem,
    removeTodoItem,
    currentTodo,
    setCurrentTodo,
    todoItems,
  } = useStore();

  const onChangeTodo = (value) => {
    setCurrentTodo(value);
  };

  const onSubmit = () => {
    if (currentTodo !== '') {
      addTodoItem(currentTodo);
    }
  };

  const onTodoDone = (index) => {
    removeTodoItem(index);
  };

  return (
    <AppView
      currentTodo={currentTodo}
      onChangeTodo={onChangeTodo}
      onSubmit={onSubmit}
      todoItems={todoItems}
      onTodoDone={onTodoDone}
    />
  );
}
