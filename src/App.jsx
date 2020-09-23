import React, { useState } from 'react';

const initialState = {
  input: '',
  todoList: ['할일', '아무것도 하지 않기', '코드숨 과제하기'],
};

function App() {
  const [state, setState] = useState(initialState);

  const { input, todoList } = state;

  const handleChange = (e) => {
    setState({
      input: e.target.value,
      todoList,
    });
  };

  const handleClickInsert = () => {
    setState({
      input: '',
      todoList: todoList.concat(input),
    });
  };

  const handleClickComplete = (value) => {
    setState({
      input,
      todoList: todoList.filter((todo, i) => i !== value),
    });
  };

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <input
          type="text"
          value={input}
          placeholder="할 일을 입력해 주세요."
          onChange={handleChange}
        />
        <button type="button" onClick={() => handleClickInsert()}>
          추가
        </button>
      </div>
      <div>
        <ol>
          {todoList.map((todo, i) => (
            <li key={i}>
              {todo}
              <button type="button" onClick={() => handleClickComplete(i)}>
                완료
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
