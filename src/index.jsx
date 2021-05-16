/* eslint-disable react/no-array-index-key */
import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';

function App() {
  return (
    <Todo />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
