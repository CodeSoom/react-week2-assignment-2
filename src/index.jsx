import React from 'react';
import ReactDOM from 'react-dom';

import TodoPage from './Components/TodoPage';

function App() {
  return <TodoPage />;
}

ReactDOM.render(<App />, document.getElementById('app'));
