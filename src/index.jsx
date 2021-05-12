import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 리액트 2-2 과제 : 구조 & 로직만 완료

function App() {
  const [state, setState] = useState({
    toDoList: [],
  });
  const { toDoList } = state;
  function handleClickAdd() {
    const input = document.getElementById('input').value;
    document.getElementById('input').value = '';
    setState(
      {
        ...state,
        toDoList: toDoList.concat(input),
      },
    );
  }
  function handleClickDone(done) {
    setState({
      ...state,
      toDoList: toDoList.filter(((todo) => (todo !== done))),
    });
  }
  return (
    <div>
      <h1>To-do</h1>
      <p>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="할 일을 입력해 주세요"
        />
        <button type="submit" onClick={handleClickAdd}>
          추가
        </button>
      </p>
      <ol type="1">
        {toDoList.length > 0
          ? toDoList.map((i) => (
            <li>
              {i}
              <button
                type="button"
                onClick={() => {
                  handleClickDone(i);
                }}
              >
                완료
              </button>
            </li>
          )) : <p>할 일이 없어요!</p>}
      </ol>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
