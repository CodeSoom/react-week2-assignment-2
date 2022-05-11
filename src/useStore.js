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

  return {
    currentTodo,
    setCurrentTodo,
    todoActions,
    setTodoActions,
    addTodoAction,
    removeTodoAction,
  };
};

export default useStore;
