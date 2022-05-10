import { useState } from 'react';

const useStore = () => {
  const [currentTodoAction, setCurrentTodoAction] = useState('');
  const [todoActions, setTodoActions] = useState([]);

  const addTodoAction = (todoAction) => {
    setTodoActions([...todoActions, todoAction]);
    setCurrentTodoAction('');
  };

  const removeTodoAction = (id) => {
    setTodoActions(todoActions.filter((todoAction, index) => index !== id));
  };

  const isEmptyCurrentTodoAction = () => currentTodoAction === '';

  const isEmptyTodoActions = () => todoActions.length === 0;

  const isExistTodoActions = () => todoActions.length !== 0;

  return {
    currentTodoAction,
    setCurrentTodoAction,
    todoActions,
    setTodoActions,
    addTodoAction,
    removeTodoAction,
    isEmptyCurrentTodoAction,
    isEmptyTodoActions,
    isExistTodoActions,
  };
};

export default useStore;
