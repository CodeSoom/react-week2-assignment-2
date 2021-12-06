import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <h1>To-do</h1>
      <p>
        <input type="text" />
        <button type="button">추가</button>
      </p>
      <p>
        <ol>
          <li>
            할일
            <button type="button">삭제</button>
          </li>
          <li>
            할일
            <button type="button">삭제</button>
          </li>
        </ol>
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
