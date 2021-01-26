import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

function handleSubmit() {

}
function makeTodo() {
  const [state, setState] = useState({
    todo: [{
      key: 0,
      title: '',
      completed: false,
    }],
  });
  const { todoList } = state;
}
const element = (
  <div>
    <h1>To-do</h1>
    <input
      type="text"
      placeholder="할 일을 입력해 주세요"
    />
    <button
      type="submit"
      onClick={handleSubmit}
    >
      제출
    </button>
    <ul>
      {listItems}
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('app'),
);
