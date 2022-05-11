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

  const onCurrentTodoChange = (value) => {
    setCurrentTodo(value);
  };

  const onCurrentTodoSubmit = () => {
    if (currentTodo !== '') {
      addTodoAction(currentTodo);
    }
  };

  const onTodoActionToDone = (index) => {
    removeTodoAction(index);
  };

  return (
    <>
      <Title />
      <NewTodoForm
        currentTodo={currentTodo}
        onCurrentTodoChange={onCurrentTodoChange}
        onCurrentTodoSubmit={onCurrentTodoSubmit}
      />
      { todoActions.length === 0 && <EmptyPlaceHolder /> }
      { todoActions.length !== 0
        && (
          <TodoActionContainer
            todoActions={todoActions}
            onTodoActionToDone={onTodoActionToDone}
          />
        ) }
    </>
  );
}
