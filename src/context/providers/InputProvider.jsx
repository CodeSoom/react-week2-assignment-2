import React, { useState } from 'react';

import { initialState, InputContext } from '../InputContext';

const InputProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const { inputValue } = state

    function handleChange(event) {
      setState({
        inputValue: event.target.value
      })
    }

    return (
        <InputContext.Provider
            value={{
              inputValue,
              handleChange
            }}
        >
            { children }
        </InputContext.Provider>
    )
};

export default InputProvider;