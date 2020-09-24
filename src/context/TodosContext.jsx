import { createContext } from 'react';

export const initialTodosState = {
  todos: [{
    id: 1,
    title: '',
  }],
};

export const TodosContext = createContext(initialTodosState);
