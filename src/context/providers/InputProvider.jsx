import React, { useState } from 'react';

import { initialInputState, InputContext } from '../InputContext';

const InputProvider = ({ children }) => {
  const [state, setState] = useState(initialInputState);
  const { inputValue } = state;

  function handleChange(event) {
    setState({
      inputValue: event.target.value,
    });
  }

  return (
    <InputContext.Provider
      value={{
        inputValue,
        handleChange,
      }}
    >
      { children }
    </InputContext.Provider>
  );
};

export default InputProvider;
