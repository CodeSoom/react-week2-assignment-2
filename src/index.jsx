import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

function App() {
  return (
    <Todo />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
