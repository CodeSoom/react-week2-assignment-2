import React from 'react';
import Static from './Static';
import Dynamic from './Dynamic';

const App = () => {
  const components = [<Static />, <Dynamic />];

  return (<div>{components.map((element) => element)}</div>);
};

export default App;
