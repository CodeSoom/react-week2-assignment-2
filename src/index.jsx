import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <h1>To-do</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해주세요." />
        <button type="button">
          추가
        </button>
      </div>
      <p>할 일이 없어요!</p>
      <ol>
        <li></li>
      </ol>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
