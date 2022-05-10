import React, { useState } from 'react';

import EmptyPlaceHolder from './EmptyPlaceHolder';
import TodoActionContainer from './TodoActionContainer';
import NewTodoForm from './NewTodoForm';
import Title from './Title';

const App = () => {
  const [currentTodoAction, setCurrentTodoAction] = useState('');
  const [todoActions, setTodoActions] = useState([]);

  const onCurrentTodoActionChange = (event) => {
    const { value } = event.target;
    setCurrentTodoAction(value);
  };

  const onCurrentTodoActionSubmit = () => {
    if (currentTodoAction.length > 0) {
      setTodoActions([...todoActions, currentTodoAction]);
      setCurrentTodoAction('');
    }
  };

  const onTodoActionToDone = (event) => {
    const { value } = event.target;
    const listIndex = Number(value);
    setTodoActions((previousList) => previousList.filter((item, i) => i !== listIndex));
  };
  return (
    <>
      <Title />
      <NewTodoForm
        currentTodoAction={currentTodoAction}
        handleCurrentTodoActionChange={onCurrentTodoActionChange}
        handleCurrentTodoActionSubmit={onCurrentTodoActionSubmit}
      />
      {todoActions.length === 0 && <EmptyPlaceHolder />}
      {todoActions.length !== 0
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
