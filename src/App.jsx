import React from 'react';

import useStore from './useStore';

import EmptyPlaceHolder from './EmptyPlaceHolder';
import TodoActionContainer from './TodoActionContainer';
import NewTodoForm from './NewTodoForm';
import Title from './Title';

export default function App() {
  const {
    addTodoAction,
    removeTodoAction,
    currentTodo,
    setCurrentTodo,
    todoActions,
  } = useStore();

  const handleChangeTodo = (value) => {
    setCurrentTodo(value);
  };

  const handleSubmit = () => {
    if (currentTodo !== '') {
      addTodoAction(currentTodo);
    }
  };

  const onTodoDone = (index) => {
    removeTodoAction(index);
  };

  return (
    <>
      <Title />
      <NewTodoForm
        currentTodo={currentTodo}
        onChangeTodo={handleChangeTodo}
        onSubmit={handleSubmit}
      />
      { todoActions.length === 0 && <EmptyPlaceHolder /> }
      { todoActions.length !== 0
        && (
          <TodoActionContainer
            todoActions={todoActions}
            onTodoDone={onTodoDone}
          />
        ) }
    </>
  );
}
