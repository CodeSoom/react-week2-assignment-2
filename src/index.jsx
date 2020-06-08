import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <div>
      <h1>To-Do</h1>
      <div>
        <input type="text" />
        <button type="button">추가</button>
      </div>

      <ul style={{ marginTop: '20px' }}>
        <li>
          test
          <button type="button" style={{ marginLeft: '10px' }}>완료</button>
        </li>
        <li>
          test
          <button type="button" style={{ marginLeft: '10px' }}>완료</button>
        </li>
        <li>
          test
          <button type="button" style={{ marginLeft: '10px' }}>완료</button>
        </li>
      </ul>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
