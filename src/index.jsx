import React from 'react';
import ReactDom from 'react-dom';

import Todo from './pages/Todo';

function App() {
  return <Todo />;
}

ReactDom.render(<App />, document.getElementById('app'));
