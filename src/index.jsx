import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h2>Todo</h2>
    <input type="text" />
    <button type="button">추가</button>
    <ul />
  </div>
);

export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
