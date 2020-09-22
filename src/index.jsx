import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>To-do</h1>
      <input type="text" />
      <button type="button">추가</button>
      <p>할 일이 없어요!</p>
      <ol>
        <li>
          할 일
          <button type="button">완료</button>
        </li>
        <li>
          아무것도 하지 않기
          <button type="button">완료</button>
        </li>
      </ol>
    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
