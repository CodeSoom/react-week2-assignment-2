import { useState } from 'react';

const useStore = () => {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todoActions, setTodoActions] = useState([]);

  const addTodoAction = (todoAction) => {
    setTodoActions([...todoActions, todoAction]);
    setCurrentTodo('');
  };

  const removeTodoAction = (id) => {
    setTodoActions(todoActions.filter((todoAction, index) => index !== id));
  };

  const isEmptyCurrentTodo = () => currentTodo === '';

  const isEmptyTodoActions = () => todoActions.length === 0;

  const isExistTodoActions = () => todoActions.length !== 0;

  return {
    currentTodo,
    setCurrentTodo,
    todoActions,
    setTodoActions,
    addTodoAction,
    removeTodoAction,
    isEmptyCurrentTodo,
    isEmptyTodoActions,
    isExistTodoActions,
  };
};

export default useStore;
