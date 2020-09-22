import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>TO-DO</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해주세요." />
        <button type="button">추가</button>
      </div>

      <div>
        <p>할 일이 없어요.</p>

        <ol>
          <li>
            할일1
            <button type="button">완료</button>
          </li>
          <li>
            할일2
            <button type="button">완료</button>
          </li>

        </ol>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
