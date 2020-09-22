import React from 'react';

function App() {
  return (
    <div>
      <h1>To-do</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해 주세요" />
        <button type="button">추가</button>
      </div>
      <ul>
        <li style={{ listStyleType: 'decimal' }}>
          할일
          <button type="button">완료</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
