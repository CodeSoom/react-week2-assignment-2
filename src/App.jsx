import React from 'react';

function App() {
  return (
    <div>
      <h1>To-do</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해 주세요." />
        <button type="button">추가</button>
      </div>
      <div>
        <ol>
          <li>
            할 일
            <button type="button">완료</button>
          </li>
          <li>
            아무것도 하지 않기
            <button type="button">완료</button>
          </li>
          <li>
            코드숨 과제하기
            <button type="button">완료</button>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
