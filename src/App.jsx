import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState(
    {
      input: '',
      newId: 100000,
      list: [],
    },
  );
  const { input, newId, list } = state;

  function onChange(e) {
    setState({
      ...state,
      input: e.target.value,
    });
  }

  function onClickComplete(id) {
    setState(
      {
        ...state,
        list: list.filter((task) => task.id !== id),
      },
    );
  }

  function onAdd() {
    setState({
      input: '',
      newId: newId + 1,
      list: [...list,
        {
          id: newId,
          content: input,
        },
      ],
    });
  }

  return (
    <Page
      input={input}
      list={list}
      onAdd={onAdd}
      onClickComplete={onClickComplete}
      onChange={onChange}
    />
  );
}

export default App;
