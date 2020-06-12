import React, { useState } from 'react';

import TodoPage from './templates/TodoPage';

export default function App() {
  const [state, setState] = useState({
    items: [],
    input: '',
  });

  const removeItemById = (todoItems, id) => {
    const index = todoItems.findIndex((i) => i.id === id);
    return [...todoItems.slice(0, index), ...todoItems.slice(index + 1)];
  };

  const getLastId = (todoItems) => (todoItems.length === 0 ? 0
    : Math.max(...todoItems.map((i) => i.id)));

  const handleComplete = (todoItems, id) => {
    setState({
      ...state,
      items: removeItemById(state.items, id),
    });
  };

  const handleSubmit = (todoItems, text) => {
    const lastId = getLastId(todoItems);
    const item = {
      id: lastId + 1,
      text,
    };
    setState({
      ...state,
      items: [...state.items, item],
      input: '',
    });
  };

  const handleInputChange = (inputValue) => {
    setState({
      ...state,
      input: inputValue,
    });
  };

  return (
    <>
      <TodoPage
        items={state.items}
        input={state.input}
        onComplete={(id) => handleComplete(state.items, id)}
        onSubmit={() => handleSubmit(state.items, state.input)}
        onInputChange={(text) => handleInputChange(text)}
      />
    </>
  );
}
