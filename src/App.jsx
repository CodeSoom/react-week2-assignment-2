import React, { useState } from 'react';
import Page from './components/Page';

let id = 0;

function App() {
  const [state, setState] = useState({
    value: '',
    items: [],
  });

  const { value, items } = state;

  function handleClickAdd() {
    setState({
      value: '',
      items: items.concat({
        id,
        value,
      }),
    });
    id += 1;
  }

  function handleClickComplete(itemId) {
    setState({
      ...state,
      items: items.filter((item) => item.id !== itemId),
    });
  }

  function handleInputChange(event) {
    setState({
      ...state,
      value: event.target.value,
    });
  }

  return (
    <Page
      value={value}
      onInputChange={handleInputChange}
      onClickAdd={handleClickAdd}
      items={items}
      onClickComplete={handleClickComplete}
    />
  );
}

export default App;
