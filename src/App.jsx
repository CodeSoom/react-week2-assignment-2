import React from 'react';

function App() {
  return (
    <div>
      <h1>To-do</h1>
      <p>
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
        />
        <button
          type="button"
        >
          추가
        </button>
      </p>
      <p>할 일이 없어요!</p>
    </div>
  );
}

export default App;
