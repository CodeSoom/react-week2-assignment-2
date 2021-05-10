import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState({
    todoList: [],
    todo: '',
  });

  const { todo, todoList } = state;

  function handleClick() {
    setState({
      todoList: [...todoList, <li>{todo}</li>],
      todo,
    });
  }

  function handleChange(event) {
    setState({
      todoList,
      todo: event.target.value,
    });
  }

  return (
    <div>
      <p>To-do</p>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>추가</button>
      <ol>
        {todoList}
      </ol>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


