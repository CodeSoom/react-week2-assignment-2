import React from 'react';
import ReactDom from 'react-dom';

import TodoApp from './TodoApp';

function App() {
  return (
    <TodoApp />
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
