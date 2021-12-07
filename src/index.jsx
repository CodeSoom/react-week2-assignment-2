import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>TODO</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해주세요!" />
        <button type="button">추가</button>
      </div>
      <br />
      <div>할 일이 없어요!</div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
