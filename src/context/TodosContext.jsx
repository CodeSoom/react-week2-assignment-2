import { createContext } from 'react';

export const initialTodosState = {
  todos: [],
  inputValue: '',
};

export const TodosContext = createContext(initialTodosState);
