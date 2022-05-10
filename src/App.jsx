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
    currentTodo,
    isEmptyCurrentTodo,
    isEmptyTodoActions,
    isExistTodoActions,
    setCurrentTodo,
    todoActions,
  } = useStore();

  const onCurrentTodoChange = (event) => {
    const { value } = event.target;
    setCurrentTodo(value);
  };

  const onCurrentTodoSubmit = () => {
    if (isEmptyCurrentTodo) {
      addTodoAction([...todoActions, currentTodo]);
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
