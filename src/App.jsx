import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    toDoList: [],
  });

  const { toDoList } = state;

  function appendToDoList(value) {
    setState({
      toDoList: { ...toDoList, value },
    });
  }

  return (
    <Page />
  );
}

export default App;
