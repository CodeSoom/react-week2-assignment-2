import React from 'react';

export default function App() {
  const todoList = [ // 임시
    '아이폰 사기',
    '맥북 프로 사기',
    '에어팟 사기',
    '애플 주식 사기',
  ];

  return(
    <div>
      <h2>To-do</h2>
      <form>
        <input />
        <button type="submit">
          추가
        </button>
      </form>
      <div>
        <ul>
          {todoList.map((todoThing, i) => (
            <li key={i}>
              <span>
                {i + 1}. {todoThing}
              </span>
              <button type="button">
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
