import React from 'react';

import useStore from './useStore';

import EmptyPlaceHolder from './EmptyPlaceHolder';
import TodoContainer from './TodoContainer';
import NewTodoForm from './NewTodoForm';
import Title from './Title';

export default function App() {
  const {
    addTodoItem,
    removeTodoItem,
    currentTodo,
    setCurrentTodo,
    todoItems,
  } = useStore();

  const handleChangeTodo = (value) => {
    setCurrentTodo(value);
  };

  const handleSubmit = () => {
    if (currentTodo !== '') {
      addTodoItem(currentTodo);
    }
  };

  const onTodoDone = (index) => {
    removeTodoItem(index);
  };

  return (
    <>
      <Title />
      <NewTodoForm
        currentTodo={currentTodo}
        onChangeTodo={handleChangeTodo}
        onSubmit={handleSubmit}
      />
      { todoItems.length === 0 && <EmptyPlaceHolder /> }
      { todoItems.length !== 0
        && (
          <TodoContainer
            todoItems={todoItems}
            onTodoDone={onTodoDone}
          />
        ) }
    </>
  );
}
