import React from 'react';

import EmptyPlaceHolder from './EmptyPlaceHolder';
import TodoActionContainer from './TodoActionContainer';
import NewTodoForm from './NewTodoForm';
import Title from './Title';
import useStore from './useStore';

const App = () => {
  const {
    addTodoAction,
    removeTodoAction,
    currentTodoAction,
    isEmptyCurrentTodoAction,
    isEmptyTodoActions,
    isExistTodoActions,
    setCurrentTodoAction,
    todoActions,
  } = useStore();

  const onCurrentTodoActionChange = (event) => {
    const { value } = event.target;
    setCurrentTodoAction(value);
  };

  const onCurrentTodoActionSubmit = () => {
    if (isEmptyCurrentTodoAction) {
      addTodoAction([...todoActions, currentTodoAction]);
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
        currentTodoAction={currentTodoAction}
        handleCurrentTodoActionChange={onCurrentTodoActionChange}
        handleCurrentTodoActionSubmit={onCurrentTodoActionSubmit}
      />
      {isEmptyTodoActions && <EmptyPlaceHolder />}
      {isExistTodoActions
      && (
        <TodoActionContainer
          todoActions={todoActions}
          onTodoActionToDone={onTodoActionToDone}
        />
      )}
    </>
  );
};

export default App;
