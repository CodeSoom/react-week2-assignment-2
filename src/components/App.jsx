import React, { useState } from 'react';

import TodoPage from './templates/TodoPage';

export default function App() {
  const [state, setState] = useState({
    items: [],
    input: '',
  });

  const removeItemById = (todoItems, id) => todoItems.filter((i) => i.id !== id);

  const getLastId = (todoItems) => Math.max(0, ...todoItems.map(({ id }) => id));

  const handleComplete = (id) => {
    setState({
      ...state,
      items: removeItemById(state.items, id),
    });
  };

  const handleSubmit = () => {
    const item = {
      id: getLastId(state.items) + 1,
      text: state.input,
    };
    setState({
      ...state,
      items: [...state.items, item],
      input: '',
    });
  };

  const handleInputChange = (text) => {
    setState({
      ...state,
      input: text,
    });
  };

  return (
    <>
      <TodoPage
        items={state.items}
        input={state.input}
        onComplete={(id) => handleComplete(id)}
        onSubmit={() => handleSubmit()}
        onInputChange={(text) => handleInputChange(text)}
      />
    </>
  );
}
