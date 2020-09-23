/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState({
    todo: [],
  });

  const { todo } = state;
  const isEmptyMessage = '할 일이 없어요!';

  function handleAddClick() {
    const inputElement = document.getElementById('todo');
    const { value } = inputElement;
    inputElement.value = '';
    todo.push(value);
    setState({
      todo,
    });
  }

  function handleCompleteClick(pos) {
    todo.splice(pos, 1);
    setState({
      todo,
    });
  }

  return (
    <div>
      <h3>To-Do App</h3>
      <input type="text" id="todo" placeholder="할 일을 입력해주세요" />
      <button type="button" onClick={() => handleAddClick()}>추가</button>
      <div id="todo-list">
        {todo.length ? '' : isEmptyMessage}
        <ol>
          {todo.map((value, index) => (
            <li key={index.toString()}>
              {value}
              <button type="button" onClick={() => handleCompleteClick(index)}>완료</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
