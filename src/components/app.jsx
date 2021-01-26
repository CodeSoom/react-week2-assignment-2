import React from 'react';

function app() {
  return (
    <div>
      <h1>To-do</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
        />
        <button type="button">추가</button>
      </form>
      <ol>
        <li>
          <span>할일 1</span>
          <button type="button">완료</button>
        </li>
        <li>
          <span>할일 2</span>
          <button type="button">완료</button>
        </li>
      </ol>
    </div>
  );
}

export default app;
