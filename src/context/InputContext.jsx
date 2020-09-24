import { createContext } from 'react';

export const initialInputState = {
  inputValue: '',
};

export const InputContext = createContext(initialInputState);
