import { createContext } from 'react';

export const initialState = {
  inputValue: ""
}

export const InputContext = createContext(initialState);