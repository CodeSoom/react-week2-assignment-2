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

  const onCurrentTodoChange = (event) => {
    const { value } = event.target;
    setCurrentTodo(value);
  };

  const onCurrentTodoSubmit = () => {
    if (currentTodo !== '') {
      addTodoAction(currentTodo);
    }
  };

  const onTodoActionToDone = (event) => {
    const { value } = event.target;
    const listIndex = Number(value);
    removeTodoAction(listIndex);
  };
  return (
    <>
      <Title />
      <NewTodoForm
        currentTodo={currentTodo}
        handleCurrentTodoChange={onCurrentTodoChange}
        handleCurrentTodoSubmit={onCurrentTodoSubmit}
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
