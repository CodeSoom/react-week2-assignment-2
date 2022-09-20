import React from 'react';
import ReactDOM from 'react-dom';

import TodoWrap from './TodoWrap';

function App() {
  return (
    <TodoWrap />
    // <div>hello</div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
