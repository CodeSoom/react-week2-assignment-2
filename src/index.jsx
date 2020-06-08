import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <div>
      <h1>To Do List!</h1>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
