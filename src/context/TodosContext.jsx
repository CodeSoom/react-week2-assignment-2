import { createContext } from 'react';

export const initialState = {
    todos: [{
            id: 1,
            title: ""
        }]
}

export const TodosContext = createContext(initialState);